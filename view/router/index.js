/**
 * @author wxh on 2018/9/10
 * @copyright
 * @desc
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import Layout from '@/views/layout/Layout'


export const constantRouterMap = [
    {path: '/login', component: () => import('@/views/login/index'), hidden: true},
    {path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true},
    {path: '/404', component: () => import('@/views/errorPage/404'), hidden: true},
    {path: '/401', component: () => import('@/views/errorPage/401'), hidden: true},
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index'),
            name: 'dashboard',
            meta: {title: '首页', icon: 'dashboard', noCache: true}
        }]
    }
];

export default new Router({
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表

export const asyncRouterMap = [

    {
        path: '/system',
        component: Layout,
        meta: { perm:'m:sys', title: '系统', icon: 'chart' },
        children: [
            {
                path: 'user_manage',
                name: 'user_manage',
                component: () => import('@/views/system/user/index'),
                meta: { perm: 'm:sys:user', title: '用户管理', icon: 'peoples', noCache: true }
            },
            {
                path: 'edit/:id',
                component: () => import('@/views/system/user/edit'),
                name: 'edit',
                meta: {hiddenTag: true , title: '用户编辑'},
                hidden: true,
            },
            {
                path: 'create',
                component: () => import('@/views/system/user/create'),
                name: 'create',
                meta: {hiddenTag: true , title: '用户创建'},
                hidden: true,
            },
            {
                path: 'role_manage',
                name: 'role_manage',
                component: () => import('@/views/system/role/index'),
                meta: { perm: 'm:sys:role', title: '角色管理', icon: 'chart', noCache: true },
            },
            {
                path: 'role_manage/:roleId/assign_perm',
                name: 'role_manage_assign_perm',
                component: () => import('@/views/system/role/assign_perm'),
                meta: { hiddenTag: true , title: '角色授权'},
                hidden: true,
            },
            {
                path: 'perm_manage',
                name: 'perm_manage',
                component:  () => import('@/views/system/perm/index'),
                meta: { perm: 'm:sys:perm', title: '权限管理', icon: 'chart', noCache: true }

            },
        ]
    },
    {
        path: '/menu1',
        component: Layout,
        children: [{
            path: 'index',
            name: 'menu1',
            component: import('@/views/menu/menu1'),
            meta: { perm:'m:menu1', title: '菜单1', icon: 'icon' }
        }]
    },


    {
        path: '/menu2',
        component: Layout,
        children: [{
            path: 'index',
            name: 'menu2',
            component: import('@/views/menu/menu2'),
            meta: { perm:'m:menu2', title: '菜单2', icon: 'icon' }
        }]
    },

    {
        path: '/menu3',
        component: Layout,
        meta: {
            perm:'m:menu3',
            title: '菜单3',
            icon: 'chart'
        },
        children: [
            { path: 'menu3_1', component: import('@/views/menu/menu3_1'), name: 'menu3_1', meta: { perm:'m:menu3:1', title: '菜单3-1', icon: 'chart', noCache: true }},
            { path: 'menu3_2', component: import('@/views/menu/menu3_2'), name: 'menu3_2', meta: { perm:'m:menu3:2', title: '菜单3-2', icon: 'chart', noCache: true }},
            { path: 'menu3_3', component: import('@/views/menu/menu3_3'), name: 'menu3_3', meta: { perm:'m:menu3:3', title: '菜单3-3', icon: 'chart', noCache: true }}
        ]
    },


    {
        path: '/menu4',
        name: 'menu4',
        component: Layout,
        redirect: '/menu4/menu4_1/a',
        meta: {
            perm:'m:menu4',
            title: '菜单4',
            icon: 'example'
        },
        children: [
            {
                path: '/menu4/menu4_1',
                name: 'menu4_1',
                component: import('@/views/menu/menu4_1/index'),
                redirect: '/menu4/menu4_1/a',
                meta: {
                    perm:'m:menu4:1',
                    title: '菜单4-1',
                    icon: 'table'
                },
                children: [
                    { path: 'a', name: 'menu4_1_a', component: import('@/views/menu/menu4_1/a'), meta: { perm:'m:menu4:1:a', title: '菜单4-1-a' }},
                    { path: 'b', name: 'menu4_1_b', component: import('@/views/menu/menu4_1/b'), meta: { perm:'m:menu4:1:b', title: '菜单4-1-b' }},
                    { path: 'c', name: 'menu4_1_c', component: import('@/views/menu/menu4_1/c'), meta: { perm:'m:menu4:1:c', title: '菜单4-1-c' }}
                ]
            },
            { path: 'menu4/menu4_2', name: 'menu4_2', icon: 'tab', component: import('@/views/menu/menu4_2/index'), meta: {perm:'m:menu4:2', title: '菜单4-2' }}
        ]
    },

    // {
    //     path: '/system',
    //     component: Layout,
    //     redirect: '/system/list',
    //     alwaysShow: true,
    //     meta: {title: '系统管理',icon: 'chart'},
    //     children:[
    //         {
    //             path: 'list',
    //             component: () => import('@/views/system/list'),
    //             name: 'list',
    //             meta: {title: '用户列表',icon: 'list'}
    //         },
    //         {
    //             path: 'edit/:id',
    //             component: () => import('@/views/system/edit'),
    //             name: 'edit',
    //             meta: {title: '用户编辑'},
    //             hidden: true
    //         },
    //         {
    //             path: 'create',
    //             component: () => import('@/views/system/create'),
    //             name: 'create',
    //             meta: {title: '用户创建', icon: 'edit'}
    //         }
    //     ]
    // },

    {path: '*', redirect: '/404', hidden: true}
]
