webpackJsonp([7],{

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(491)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(476),
  /* template */
  __webpack_require__(523),
  /* scopeId */
  "data-v-77e64d82",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/pos-admin/view/views/system/user/edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(3)
  hotAPI.install(__webpack_require__(2), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77e64d82", Component.options)
  } else {
    hotAPI.reload("data-v-77e64d82", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["u"] = getSystemTotal;
/* harmony export (immutable) */ __webpack_exports__["q"] = getSystemList;
/* harmony export (immutable) */ __webpack_exports__["p"] = getSystemRole;
/* harmony export (immutable) */ __webpack_exports__["r"] = updateSystemRole;
/* harmony export (immutable) */ __webpack_exports__["s"] = updateSystemStatus;
/* harmony export (immutable) */ __webpack_exports__["t"] = createNewAdministrator;
/* harmony export (immutable) */ __webpack_exports__["l"] = getRoleList;
/* harmony export (immutable) */ __webpack_exports__["g"] = getPermList;
/* harmony export (immutable) */ __webpack_exports__["f"] = getPermsListByRoleId;
/* harmony export (immutable) */ __webpack_exports__["k"] = updateRolePermsByRoleId;
/* harmony export (immutable) */ __webpack_exports__["h"] = listBtnPermGroupByParent;
/* harmony export (immutable) */ __webpack_exports__["i"] = addRolePerm;
/* harmony export (immutable) */ __webpack_exports__["j"] = deleteRolePerm;
/* harmony export (immutable) */ __webpack_exports__["a"] = listAllPermissions;
/* harmony export (immutable) */ __webpack_exports__["e"] = syncMenuPerms;
/* unused harmony export syncApiPerms */
/* harmony export (immutable) */ __webpack_exports__["b"] = createNewPerm;
/* harmony export (immutable) */ __webpack_exports__["d"] = deletePerm;
/* harmony export (immutable) */ __webpack_exports__["c"] = updatePerm;
/* harmony export (immutable) */ __webpack_exports__["o"] = addRole;
/* harmony export (immutable) */ __webpack_exports__["m"] = updateRole;
/* harmony export (immutable) */ __webpack_exports__["n"] = deleteRole;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(124);
/**
 * @author wxh on 2018/9/7
 * @copyright
 * @desc
 */



/**
 * 获取用户总量
 * @returns {*}
 */

function getSystemTotal() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/total',
        method: 'get'
    });
}
/**
 * 根据条件获取用户列表
 * @returns {*}
 */
function getSystemList(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/list',
        method: 'get',
        params: params
    });
}

/**
 * 获取角色列表
 * @returns {*}
 */
function getSystemRole(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role',
        method: 'get',
        params: params
    });
}

/**
 * 更新管理员角色
 * @returns {*}
 */
function updateSystemRole(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role/binding',
        method: 'post',
        data: data
    });
}

/**
 * 锁定\解锁管理员
 * @returns {*}
 */
function updateSystemStatus(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/account',
        method: 'delete',
        params: params
    });
}

/**
 * 创建管理员
 * @returns {*}
 */
function createNewAdministrator(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/account',
        method: 'put',
        data: data
    });
}

/**
 * 获取角色列表
 * @returns {*}
 */
function getRoleList(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role',
        method: 'get',
        params: params
    });
}

/**
 * 获取权限列表
 * @returns {*}
 */
function getPermList(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/perm',
        method: 'get',
        params: params
    });
}

/**
 * 根据角色Id权限列表
 * @returns {*}
 */
function getPermsListByRoleId(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role/perms',
        method: 'get',
        params: params
    });
}

/**
 * 根据角色Id修改绑定的权限
 * @returns {*}
 */
function updateRolePermsByRoleId(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role/perms',
        method: 'post',
        data: data
    });
}

/**
 * 列出按钮权限，按parent字段分组
 * @returns {*}
 */
function listBtnPermGroupByParent() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/perm/list/btn_map',
        method: 'get'
    });
}

/**
 * 添加角色的权限
 * @returns {*}
 */
function addRolePerm(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role/perm',
        method: 'put',
        data: data
    });
}

/**
 * 删除角色的权限
 * @returns {*}
 */
function deleteRolePerm(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role/perm',
        method: 'delete',
        params: params
    });
}

/**
 * 列出所有菜单、按钮、接口等权限
 * @returns {*}
 */

function listAllPermissions() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/perm/list/all',
        method: 'get'
    });
}

/**
 * 同步菜单权限数据
 * @returns {*}
 */

function syncMenuPerms(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/perm/sync/menu',
        method: 'post',
        data: data
    });
}

/**
 * 同步接口权限数据
 * @returns {*}
 */

function syncApiPerms(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/perm/sync/api',
        method: 'post',
        params: params
    });
}

/**
 * 创建权限数据
 * @returns {*}
 */

function createNewPerm(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/perm',
        method: 'put',
        data: data
    });
}

/**
 * 权限数据删除
 * @returns {*}
 */

function deletePerm(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/perm',
        method: 'delete',
        params: params
    });
}

/**
 * 修改权限数据
 * @returns {*}
 */

function updatePerm(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/perm',
        method: 'post',
        data: data
    });
}

/**
 * 创建角色信息
 * @returns {*}
 */

function addRole(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role',
        method: 'put',
        data: data
    });
}

/**
 * 修改角色信息
 * @returns {*}
 */

function updateRole(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role',
        method: 'post',
        data: data
    });
}

/**
 * 删除角色信息
 * @returns {*}
 */

function deleteRole(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/system/role',
        method: 'delete',
        params: params
    });
}

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(392)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"edit.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_system__ = __webpack_require__(415);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'edit',
    data: function data() {
        return {
            // list: null,
            // total: 0,
            // listLoading: true,
            // listQuery: {
            //     page_index: 1,
            //     page_size: 10
            // }
        };
    },

    filters: {},
    created: function created() {},

    methods: {
        getUserInfo: function getUserInfo() {
            this.listLoading = true;
            // getSystemList(this.listQuery).then(response => {
            //     this.list = response.data.list;
            //     this.total = response.data.count;
            //     this.listLoading = false
            // })
        }
    }
});

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(446);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(393)("038ac0fe", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(446, function() {
     var newContent = __webpack_require__(446);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-container"
  }, [_vm._v("\n编辑用户\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(3).rerender("data-v-77e64d82", module.exports)
  }
}

/***/ })

});