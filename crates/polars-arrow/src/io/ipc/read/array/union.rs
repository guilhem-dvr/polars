use std::collections::VecDeque;
use std::io::{Read, Seek};

use polars_error::{PolarsResult, polars_err};

use super::super::super::IpcField;
use super::super::deserialize::{read, skip};
use super::super::read_basic::*;
use super::super::{Compression, Dictionaries, IpcBuffer, Node, Version};
use crate::array::UnionArray;
use crate::datatypes::{ArrowDataType, UnionMode};
use crate::io::ipc::read::array::{try_get_array_length, try_get_field_node};

#[allow(clippy::too_many_arguments)]
pub fn read_union<R: Read + Seek>(
    field_nodes: &mut VecDeque<Node>,
    variadic_buffer_counts: &mut VecDeque<usize>,
    dtype: ArrowDataType,
    ipc_field: &IpcField,
    buffers: &mut VecDeque<IpcBuffer>,
    reader: &mut R,
    dictionaries: &Dictionaries,
    block_offset: u64,
    is_little_endian: bool,
    compression: Option<Compression>,
    limit: Option<usize>,
    version: Version,
    scratch: &mut Vec<u8>,
) -> PolarsResult<UnionArray> {
    let field_node = try_get_field_node(field_nodes, &dtype)?;

    if version != Version::V5 {
        let _ = buffers
            .pop_front()
            .ok_or_else(|| polars_err!(oos = "IPC: missing validity buffer."))?;
    };

    let length = try_get_array_length(field_node, limit)?;

    let types = read_buffer(
        buffers,
        length,
        reader,
        block_offset,
        is_little_endian,
        compression,
        scratch,
    )?;

    let offsets = if let ArrowDataType::Union(u) = &dtype {
        if !u.mode.is_sparse() {
            Some(read_buffer(
                buffers,
                length,
                reader,
                block_offset,
                is_little_endian,
                compression,
                scratch,
            )?)
        } else {
            None
        }
    } else {
        unreachable!()
    };

    let fields = UnionArray::get_fields(&dtype);

    let fields = fields
        .iter()
        .zip(ipc_field.fields.iter())
        .map(|(field, ipc_field)| {
            read(
                field_nodes,
                variadic_buffer_counts,
                field,
                ipc_field,
                buffers,
                reader,
                dictionaries,
                block_offset,
                is_little_endian,
                compression,
                None,
                version,
                scratch,
            )
        })
        .collect::<PolarsResult<Vec<_>>>()?;

    UnionArray::try_new(dtype, types, fields, offsets)
}

pub fn skip_union(
    field_nodes: &mut VecDeque<Node>,
    dtype: &ArrowDataType,
    buffers: &mut VecDeque<IpcBuffer>,
    variadic_buffer_counts: &mut VecDeque<usize>,
) -> PolarsResult<()> {
    let _ = field_nodes.pop_front().ok_or_else(|| {
        polars_err!(
            oos = "IPC: unable to fetch the field for struct. The file or stream is corrupted."
        )
    })?;

    let _ = buffers
        .pop_front()
        .ok_or_else(|| polars_err!(oos = "IPC: missing validity buffer."))?;
    if let ArrowDataType::Union(u) = dtype {
        assert!(u.mode == UnionMode::Dense);
        let _ = buffers
            .pop_front()
            .ok_or_else(|| polars_err!(oos = "IPC: missing offsets buffer."))?;
    } else {
        unreachable!()
    };

    let fields = UnionArray::get_fields(dtype);

    fields
        .iter()
        .try_for_each(|field| skip(field_nodes, field.dtype(), buffers, variadic_buffer_counts))
}
