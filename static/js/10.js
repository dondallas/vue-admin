webpackJsonp([10],{

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(471),
  /* template */
  __webpack_require__(525),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/pos-admin/view/views/menu/menu4_2/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(3)
  hotAPI.install(__webpack_require__(2), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba69a2e2", Component.options)
  } else {
    hotAPI.reload("data-v-ba69a2e2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Menu4_2',
  data: function data() {
    return {
      pageName: '菜单4_2'
    };
  }
});

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-container"
  }, [_c('h1', [_vm._v(_vm._s(_vm.pageName))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(3).rerender("data-v-ba69a2e2", module.exports)
  }
}

/***/ })

});