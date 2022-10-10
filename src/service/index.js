import YXRequest from './request/reuqest'
import { BASE_URL, TIME_OUT } from './request/config'
import qs from 'qs'

const yxRequest = new YXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 拦截请求将POST请求数据转为FormData
      config.data = qs.stringify(config.data)
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseIntercptor: (res) => {
      return res
    },
    responseIntercptorCatch: (err) => {
      return err
    }
  }
})

export { yxRequest }
