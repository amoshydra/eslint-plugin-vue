(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{453:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("ul",[e._m(2),e._v(" "),n("li",[e._v("🔧 The "),n("code",[e._v("--fix")]),e._v(" option on the "),n("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),n("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._v(" "),n("p",[e._v("Define a style for the component name in template casing for consistency purposes.")]),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("This rule aims to warn the tag names other than the configured casing in Vue.js template.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/component-name-in-template-casing":["error"]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<template>\n  \x3c!-- ✓ GOOD --\x3e\n  <TheComponent />\n  \n  \x3c!-- ✗ BAD --\x3e\n  <the-component />\n  <theComponent />\n  <The-component />\n</template>\n")])])])]),e._v(" "),e._m(8),e._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/component-name-in-template-casing":["error","kebab-case"]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<template>\n  \x3c!-- ✓ GOOD --\x3e\n  <the-component />\n\n  \x3c!-- ✗ BAD --\x3e\n  <TheComponent />\n  <theComponent />\n  <Thecomponent />\n  <The-component />\n</template>\n")])])])]),e._v(" "),e._m(9),e._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/component-name-in-template-casing":["error","PascalCase",{ignores:["custom-element"]}]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<template>\n  \x3c!-- ✓ GOOD --\x3e\n  <TheComponent/>\n  <custom-element></custom-element>\n  \n  \x3c!-- ✗ BAD --\x3e\n  <magic-element></magic-element>\n</template>\n")])])])]),e._v(" "),e._m(10),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended",target:"_blank",rel:"noopener noreferrer"}},[e._v("Style guide - Component name casing in templates"),n("OutboundLink")],1)])]),e._v(" "),e._m(11),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/component-name-in-template-casing.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/component-name-in-template-casing.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),n("OutboundLink")],1)])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vue-component-name-in-template-casing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-component-name-in-template-casing","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/component-name-in-template-casing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("enforce specific casing for the component naming style in template")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("⚙️ This rule is included in "),t("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),t("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{attrs:{class:"token property"}},[e._v('"vue/component-name-in-template-casing"')]),n("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("[")]),n("span",{attrs:{class:"token string"}},[e._v('"error"')]),n("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{attrs:{class:"token string"}},[e._v('"PascalCase"')]),e._v(" | "),n("span",{attrs:{class:"token string"}},[e._v('"kebab-case"')]),n("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n    "),n("span",{attrs:{class:"token property"}},[e._v('"ignores"')]),n("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("[")]),n("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("code",[e._v('"PascalCase"')]),e._v(" (default) ... enforce tag names to pascal case. E.g. "),n("code",[e._v("<CoolComponent>")]),e._v(". This is consistent with the JSX practice.")]),e._v(" "),n("li",[n("code",[e._v('"kebab-case"')]),e._v(" ... enforce tag names to kebab case: E.g. "),n("code",[e._v("<cool-component>")]),e._v(". This is consistent with the HTML practice which is case-insensitive originally.")]),e._v(" "),n("li",[n("code",[e._v("ignores")]),e._v(" ("),n("code",[e._v("string[]")]),e._v(") ... The element names to ignore. Sets the element name to allow. For example, a custom element or a non-Vue component.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pascalcase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pascalcase","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v('"PascalCase"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kebab-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kebab-case","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v('"kebab-case"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pascalcase-ignores-custom-element"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pascalcase-ignores-custom-element","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v('"PascalCase", { ignores: ["custom-element"] }')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" 📚 Further reading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);s.options.__file="component-name-in-template-casing.md";t.default=s.exports}}]);