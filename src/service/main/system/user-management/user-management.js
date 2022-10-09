import { yxRequest } from "@/service";

/**
 * 查询用户列表
 * @param {number} limit 
 * @param {number} page 
 * @param {string} userName 
 * @param {string} nickName 
 * @returns 
 */
export function requestUserListByName(limit=10, page=1,userName='',nickName='') {
    return yxRequest.get({
        url: '/sys/user',
        params: {
            limit,
            page,
            userName: '',
            nickName: ''
        }
    })
}