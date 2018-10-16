/**
 * @author wxh on 2018/9/7
 * @copyright
 * @desc
 */

import request from '@/utils/request'

/**
 * 获取用户总量
 * @returns {*}
 */

export function getSystemTotal() {
    return request({
        url: '/system/total',
        method: 'get'
    })
}
/**
 * 根据条件获取用户列表
 * @returns {*}
 */
export function getSystemList(params) {
    return request({
        url: '/system/list',
        method: 'get',
        params: params
    })
}

/**
 * 获取角色列表
 * @returns {*}
 */
export function getSystemRole(params) {
    return request({
        url: '/system/role',
        method: 'get',
        params: params
    })
}

/**
 * 更新管理员角色
 * @returns {*}
 */
export function updateSystemRole(data) {
    return request({
        url: '/system/role/binding',
        method: 'post',
        data
    })
}

/**
 * 锁定\解锁管理员
 * @returns {*}
 */
export function updateSystemStatus(params) {
    return request({
        url: '/system/account',
        method: 'delete',
        params: params
    })
}

/**
 * 创建管理员
 * @returns {*}
 */
export function createNewAdministrator(data) {
    return request({
        url: '/system/account',
        method: 'put',
        data
    })
}


/**
 * 获取角色列表
 * @returns {*}
 */
export function getRoleList(params) {
    return request({
        url: '/system/role',
        method: 'get',
        params: params
    })
}

/**
 * 获取权限列表
 * @returns {*}
 */
export function getPermList(params) {
    return request({
        url: '/system/perm',
        method: 'get',
        params: params
    })
}

/**
 * 根据角色Id权限列表
 * @returns {*}
 */
export function getPermsListByRoleId(params) {
    return request({
        url: '/system/role/perms',
        method: 'get',
        params: params
    })
}

/**
 * 根据角色Id修改绑定的权限
 * @returns {*}
 */
export function updateRolePermsByRoleId(data) {
    return request({
        url: '/system/role/perms',
        method: 'post',
        data
    })
}

/**
 * 列出按钮权限，按parent字段分组
 * @returns {*}
 */
export function listBtnPermGroupByParent() {
    return request({
        url: '/system/perm/list/btn_map',
        method: 'get'
    })
}

/**
 * 添加角色的权限
 * @returns {*}
 */
export function addRolePerm(data) {
    return request({
        url: '/system/role/perm',
        method: 'put',
        data
    })
}

/**
 * 删除角色的权限
 * @returns {*}
 */
export function deleteRolePerm(params) {
    return request({
        url: '/system/role/perm',
        method: 'delete',
        params
    })
}

/**
 * 列出所有菜单、按钮、接口等权限
 * @returns {*}
 */

export function listAllPermissions() {
    return request({
        url: '/system/perm/list/all',
        method: 'get'
    })
}


/**
 * 同步菜单权限数据
 * @returns {*}
 */

export function syncMenuPerms(data) {
    return request({
        url: '/system/perm/sync/menu',
        method: 'post',
        data
    })
}

/**
 * 同步接口权限数据
 * @returns {*}
 */

export function syncApiPerms(params) {
    return request({
        url: '/system/perm/sync/api',
        method: 'post',
        params
    })
}

/**
 * 创建权限数据
 * @returns {*}
 */

export function createNewPerm(data) {
    return request({
        url: '/system/perm',
        method: 'put',
        data
    })
}

/**
 * 权限数据删除
 * @returns {*}
 */

export function deletePerm(params) {
    return request({
        url: '/system/perm',
        method: 'delete',
        params
    })
}


/**
 * 修改权限数据
 * @returns {*}
 */

export function updatePerm(data) {
    return request({
        url: '/system/perm',
        method: 'post',
        data
    })
}

/**
 * 创建角色信息
 * @returns {*}
 */

export function addRole(data) {
    return request({
        url: '/system/role',
        method: 'put',
        data
    })
}


/**
 * 修改角色信息
 * @returns {*}
 */

export function updateRole(data) {
    return request({
        url: '/system/role',
        method: 'post',
        data
    })
}

/**
 * 删除角色信息
 * @returns {*}
 */

export function deleteRole(params) {
    return request({
        url: '/system/role',
        method: 'delete',
        params
    })
}
