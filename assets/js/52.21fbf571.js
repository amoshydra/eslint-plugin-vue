(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{414:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",[n("li",[t._v("🔧 The "),n("code",[t._v("--fix")]),t._v(" option on the "),n("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[t._v("command line"),n("OutboundLink")],1),t._v(" can automatically fix some of the problems reported by this rule.")])]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("This rule is similar to core "),n("a",{attrs:{href:"https://eslint.org/docs/rules/indent",target:"_blank",rel:"noopener noreferrer"}},[t._v("indent"),n("OutboundLink")],1),t._v(" rule, but it has an option for inside of "),n("code",[t._v("<script>")]),t._v(" tag.")]),t._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/script-indent":["error"]}}},[n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" d "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      e "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("This rule has some options.")]),t._v(" "),t._m(4),n("ul",[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("li",[n("code",[t._v("ignores")]),t._v(" ("),n("code",[t._v("string[]")]),t._v(") ... The selector to ignore nodes. The AST spec is "),n("a",{attrs:{href:"https://github.com/mysticatea/vue-eslint-parser/blob/master/docs/ast.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(". You can use "),n("a",{attrs:{href:"https://github.com/estools/esquery#readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("esquery"),n("OutboundLink")],1),t._v(" to select nodes. Default is an empty array.")])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/script-indent":["error",2,{baseIndent:1}]}}},[n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      c "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" d "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        e "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),t._m(11),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://eslint.org/docs/rules/indent",target:"_blank",rel:"noopener noreferrer"}},[t._v("indent"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("router-link",{attrs:{to:"./html-indent.html"}},[t._v("vue/html-indent")])],1)]),t._v(" "),t._m(12),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/script-indent.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/script-indent.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),n("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-script-indent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-script-indent","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/script-indent")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("enforce consistent indentation in "),s("code",[this._v("<script>")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"vue/script-indent"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"error"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TYPE"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v('"baseIndent"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v('"switchCase"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v('"ignores"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("code",[t._v("TYPE")]),t._v(" ("),n("code",[t._v('number | "tab"')]),t._v(") ... The type of indentation. Default is "),n("code",[t._v("2")]),t._v(". If this is a number, it's the number of spaces for one indent. If this is "),n("code",[t._v('"tab"')]),t._v(", it uses one tab for one indent.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("baseIndent")]),this._v(" ("),s("code",[this._v("integer")]),this._v(") ... The multiplier of indentation for top-level statements. Default is "),s("code",[this._v("0")]),this._v(".")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("code",[t._v("switchCase")]),t._v(" ("),n("code",[t._v("integer")]),t._v(") ... The multiplier of indentation for "),n("code",[t._v("case")]),t._v("/"),n("code",[t._v("default")]),t._v(" clauses. Default is "),n("code",[t._v("0")]),t._v(".")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("This rule only checks "),n("code",[t._v(".vue")]),t._v(" files and does not interfere with other "),n("code",[t._v(".js")]),t._v(" files. Unfortunately the default "),n("code",[t._v("indent")]),t._v(" rule when turned on will try to lint both, so in order to make them complementary you can use "),n("code",[t._v("overrides")]),t._v(" setting and disable "),n("code",[t._v("indent")]),t._v(" rule on "),n("code",[t._v(".vue")]),t._v(" files:")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"rules"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v('"vue/script-indent"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"error"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v('"baseIndent"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"overrides"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token property"}},[t._v('"files"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"*.vue"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token property"}},[t._v('"rules"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"indent"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-baseindent-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-baseindent-1","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v('2, "baseIndent": 1')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"related-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" 👫 Related rules")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);e.options.__file="script-indent.md";s.default=e.exports}}]);