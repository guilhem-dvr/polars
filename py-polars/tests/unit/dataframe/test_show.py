from unittest.mock import patch

import pytest

import polars as pl
from polars.testing.asserts import assert_frame_equal


@pytest.fixture(name="in_notebook")
def _in_notebook(monkeypatch: pytest.MonkeyPatch) -> None:
    monkeypatch.setattr("polars.dataframe.frame._in_notebook", lambda: True)


def test_df_show_default(capsys: pytest.CaptureFixture[str]) -> None:
    df = pl.DataFrame(
        {
            "foo": [1, 2, 3, 4, 5, 6, 7],
            "bar": ["a", "b", "c", "d", "e", "f", "g"],
        }
    )
    df.show()
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (5, 2)
┌─────┬─────┐
│ foo ┆ bar │
│ --- ┆ --- │
│ i64 ┆ str │
╞═════╪═════╡
│ 1   ┆ a   │
│ 2   ┆ b   │
│ 3   ┆ c   │
│ 4   ┆ d   │
│ 5   ┆ e   │
└─────┴─────┘
"""
    )


def test_df_show_n_rows(capsys: pytest.CaptureFixture[str]) -> None:
    df = pl.DataFrame(
        {
            "foo": [1, 2, 3, 4, 5, 6, 7],
            "bar": ["a", "b", "c", "d", "e", "f", "g"],
        }
    )
    df.show(3)
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (3, 2)
┌─────┬─────┐
│ foo ┆ bar │
│ --- ┆ --- │
│ i64 ┆ str │
╞═════╪═════╡
│ 1   ┆ a   │
│ 2   ┆ b   │
│ 3   ┆ c   │
└─────┴─────┘
"""
    )


def test_df_show_float_precision(capsys: pytest.CaptureFixture[str]) -> None:
    from math import e, pi

    df = pl.DataFrame({"const": ["pi", "e"], "value": [pi, e]})
    df.show(float_precision=15)
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (2, 2)
┌───────┬───────────────────┐
│ const ┆ value             │
│ ---   ┆ ---               │
│ str   ┆ f64               │
╞═══════╪═══════════════════╡
│ pi    ┆ 3.141592653589793 │
│ e     ┆ 2.718281828459045 │
└───────┴───────────────────┘
"""
    )

    df.show(float_precision=3)
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (2, 2)
┌───────┬───────┐
│ const ┆ value │
│ ---   ┆ ---   │
│ str   ┆ f64   │
╞═══════╪═══════╡
│ pi    ┆ 3.142 │
│ e     ┆ 2.718 │
└───────┴───────┘
"""
    )


def test_df_show_fmt_str_lengths(capsys: pytest.CaptureFixture[str]) -> None:
    df = pl.DataFrame(
        {
            "txt": [
                "Play it, Sam. Play 'As Time Goes By'.",
                "This is the beginning of a beautiful friendship.",
            ]
        }
    )
    df.show(fmt_str_lengths=10)
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (2, 1)
┌─────────────┐
│ txt         │
│ ---         │
│ str         │
╞═════════════╡
│ Play it, S… │
│ This is th… │
└─────────────┘
"""
    )
    df.show(fmt_str_lengths=50)
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (2, 1)
┌──────────────────────────────────────────────────┐
│ txt                                              │
│ ---                                              │
│ str                                              │
╞══════════════════════════════════════════════════╡
│ Play it, Sam. Play 'As Time Goes By'.            │
│ This is the beginning of a beautiful friendship. │
└──────────────────────────────────────────────────┘
"""
    )


def test_df_show_fmt_table_cell_list_len(capsys: pytest.CaptureFixture[str]) -> None:
    df = pl.DataFrame({"nums": [list(range(10))]})

    df.show(fmt_table_cell_list_len=2)
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (1, 1)
┌───────────┐
│ nums      │
│ ---       │
│ list[i64] │
╞═══════════╡
│ [0, … 9]  │
└───────────┘
"""
    )

    df.show(fmt_table_cell_list_len=8)
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (1, 1)
┌────────────────────────────┐
│ nums                       │
│ ---                        │
│ list[i64]                  │
╞════════════════════════════╡
│ [0, 1, 2, 3, 4, 5, 6, … 9] │
└────────────────────────────┘
"""
    )


def test_df_show_tbl_cols(capsys: pytest.CaptureFixture[str]) -> None:
    df = pl.DataFrame({str(i): [i] for i in range(10)})

    df.show(tbl_cols=3)
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (1, 10)
┌─────┬─────┬───┬─────┐
│ 0   ┆ 1   ┆ … ┆ 9   │
│ --- ┆ --- ┆   ┆ --- │
│ i64 ┆ i64 ┆   ┆ i64 │
╞═════╪═════╪═══╪═════╡
│ 0   ┆ 1   ┆ … ┆ 9   │
└─────┴─────┴───┴─────┘
"""
    )

    df.show(tbl_cols=7)
    out, _ = capsys.readouterr()
    assert (
        out
        == """shape: (1, 10)
┌─────┬─────┬─────┬─────┬───┬─────┬─────┬─────┐
│ 0   ┆ 1   ┆ 2   ┆ 3   ┆ … ┆ 7   ┆ 8   ┆ 9   │
│ --- ┆ --- ┆ --- ┆ --- ┆   ┆ --- ┆ --- ┆ --- │
│ i64 ┆ i64 ┆ i64 ┆ i64 ┆   ┆ i64 ┆ i64 ┆ i64 │
╞═════╪═════╪═════╪═════╪═══╪═════╪═════╪═════╡
│ 0   ┆ 1   ┆ 2   ┆ 3   ┆ … ┆ 7   ┆ 8   ┆ 9   │
└─────┴─────┴─────┴─────┴───┴─────┴─────┴─────┘
"""
    )


@pytest.mark.usefixtures("in_notebook")
def test_df_show_in_notebook(monkeypatch: pytest.MonkeyPatch) -> None:
    with patch("IPython.display.display_html") as display_html:
        df = pl.DataFrame(
            {
                "foo": [1, 2, 3, 4, 5, 6, 7],
                "bar": ["a", "b", "c", "d", "e", "f", "g"],
            }
        )
        df.show(7)
        display_html.assert_called_once()
        args, _ = display_html.call_args
        assert len(args) == 1
        assert_frame_equal(args[0], df)
