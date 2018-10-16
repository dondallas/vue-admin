import request from '@/utils/request'

export function loginByUsername(username, password) {
    const data = {
        username,
        password
    };

    return request({
        url: '/admin/login',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/admin/logout',
        method: 'delete'
    })
}

export function getUserInfo(token) {
    return request({
        url: '/system/info',
        method: 'get',
        params: {token}
    })
}

