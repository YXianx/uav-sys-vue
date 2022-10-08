import { yxRequest } from "../index";
import { ElMessage } from 'element-plus'

/**
 * 用户登陆
 * @param {object} account 
 * @returns promise 
 */
export function requestAccountLogin(account) {
    return yxRequest.post({
        url: '/sys/user/login',
        data: {
            userName: account.userName,
            password: account.password
        },
        interceptors: {
            requestInterceptor: (config) => {
                return config
            },
            responseInterceptor: (res) => {
                const code = res.code
                if (code === 200) {
                    ElMessage({
                        type: 'success',
                        message: '登陆成功'
                    })
                } else if (code === 1002) {
                    ElMessage({
                        type: 'warning',
                        message: '帐号或密码错误'
                    })
                }
                return res
            }
        }
    })
}

/**
 * 获取用户信息
 * @param {number} id 
 * @returns 
 */
export function requestUserInfoById(id) {
    return yxRequest.get({
        url: '/users/' + id
    })
}

/**
 * 获取用户角色菜单树
 * @param {number} roleId 
 * @returns 
 */
export function requestUserMenus() {
    return yxRequest.get({
        url: '/sys/menu'
    })
}