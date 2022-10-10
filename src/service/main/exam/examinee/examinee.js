import { yxRequest } from '@/service'
import { ElMessage } from 'element-plus'
export function requestSelectExaminee(selectObj) {
  return yxRequest.get({
    url: '/exam/examinee',
    params: {
      fullName: selectObj.fullName,
      cardId: selectObj.cardId,
      status: selectObj.status,
      startTime: selectObj.startTime,
      endTime: selectObj.endTime,
      page: selectObj.page,
      limit: selectObj.limit
    },
    interceptors: {
      requestInterceptor: (config) => {
        if (!config.params.startTime) {
          ElMessage({
            type: 'warning',
            message: '未填写开始日期'
          })
        }
        return config
      },
      responseInterceptor: (res) => {
        return res
      }
    }
  })
}
