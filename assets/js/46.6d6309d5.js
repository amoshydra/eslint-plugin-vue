(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{420:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",[t._m(2),t._v(" "),n("li",[t._v("🔧 The "),n("code",[t._v("--fix")]),t._v(" option on the "),n("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[t._v("command line"),n("OutboundLink")],1),t._v(" can automatically fix some of the problems reported by this rule.")])]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("This rule reports prop types that can't be presumed as constructors.")]),t._v(" "),n("p",[t._v("It's impossible to catch every possible case and know whether the prop type is a constructor or not, hence this rule black list few types of nodes, instead of white-listing correct ones.")]),t._v(" "),n("p",[t._v("The following types are forbidden and will be reported:")]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("It will catch most commonly made mistakes which are using strings instead of constructors.")]),t._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/require-prop-type-constructor":["error"]}}},[n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/* ✓ GOOD */")]),t._v("\n    myProp"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    anotherProp"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Number"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    myFieldWithBadType"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    myOtherFieldWithBadType"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/* ✗ BAD */")]),t._v("\n    myProp"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Number"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    anotherProp"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"Number"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"String"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    myFieldWithBadType"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Object"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    myOtherFieldWithBadType"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Number"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("Nothing.")]),t._v(" "),t._m(6),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org/v2/guide/components-props.html#Prop-Validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Guide - Prop Validation"),n("OutboundLink")],1)])]),t._v(" "),t._m(7),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/require-prop-type-constructor.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/require-prop-type-constructor.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),n("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-require-prop-type-constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-require-prop-type-constructor","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/require-prop-type-constructor")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("require prop type to be a constructor")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("⚙️ This rule is included in all of "),s("code",[this._v('"plugin:vue/essential"')]),this._v(", "),s("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),s("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Literal")]),this._v(" "),s("li",[this._v("TemplateLiteral")]),this._v(" "),s("li",[this._v("BinaryExpression")]),this._v(" "),s("li",[this._v("UpdateExpression")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" 📚 Further reading")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);e.options.__file="require-prop-type-constructor.md";s.default=e.exports}}]);