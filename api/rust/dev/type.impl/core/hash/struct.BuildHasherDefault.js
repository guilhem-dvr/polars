(function() {
    var type_impls = Object.fromEntries([["polars_core",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildHasher-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.7.0\">1.7.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#770\">Source</a></span><a href=\"#impl-BuildHasher-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Hasher\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#771\">Source</a><a href=\"#associatedtype.Hasher\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#associatedtype.Hasher\" class=\"associatedtype\">Hasher</a> = H</h4></section></summary><div class='docblock'>Type of the hasher that will be created.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_hasher\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#773\">Source</a><a href=\"#method.build_hasher\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#tymethod.build_hasher\" class=\"fn\">build_hasher</a>(&amp;self) -&gt; H</h4></section></summary><div class='docblock'>Creates a new hasher. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#tymethod.build_hasher\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_one\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.71.0\">1.71.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#694-697\">Source</a></span><a href=\"#method.hash_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#method.hash_one\" class=\"fn\">hash_one</a>&lt;T&gt;(&amp;self, x: T) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#associatedtype.Hasher\" title=\"type core::hash::BuildHasher::Hasher\">Hasher</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Calculates the hash of a single value. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html#method.hash_one\">Read more</a></div></details></div></details>","BuildHasher","polars_core::hashing::identity::IdBuildHasher"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildHasherDefault%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#753\">Source</a><a href=\"#impl-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.85.0, const since 1.85.0\">1.85.0 (const: 1.85.0)</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#757\">Source</a></span><h4 class=\"code-header\">pub const fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new BuildHasherDefault for Hasher <code>H</code>.</p>\n</div></details></div></details>",0,"polars_core::hashing::identity::IdBuildHasher"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.7.0\">1.7.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#779\">Source</a></span><a href=\"#impl-Clone-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#780\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polars_core::hashing::identity::IdBuildHasher"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.9.0\">1.9.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#763\">Source</a></span><a href=\"#impl-Debug-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#764\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polars_core::hashing::identity::IdBuildHasher"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.7.0\">1.7.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#786\">Source</a></span><a href=\"#impl-Default-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#787\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","polars_core::hashing::identity::IdBuildHasher"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.29.0\">1.29.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#793\">Source</a></span><a href=\"#impl-PartialEq-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#794\">Source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, _other: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","polars_core::hashing::identity::IdBuildHasher"],["<section id=\"impl-Eq-for-BuildHasherDefault%3CH%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.29.0\">1.29.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#800\">Source</a></span><a href=\"#impl-Eq-for-BuildHasherDefault%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/hash/struct.BuildHasherDefault.html\" title=\"struct core::hash::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;</h3></section>","Eq","polars_core::hashing::identity::IdBuildHasher"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[15360]}