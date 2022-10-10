import { yxRequest } from '../index'

/**
 * 请求系统信息
 * @returns
 */
export function reuqestSysInfo() {
  return yxRequest.get({
    url: '/sys'
  })
}
