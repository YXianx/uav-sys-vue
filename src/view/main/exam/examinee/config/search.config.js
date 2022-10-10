export const emFormConfig = {
  labelWidth: '80px',
  itemStyle: {
    marginTop: '22px'
  },
  // colLayout: {
  //   span: 6
  // },
  formItems: [
    {
      field: 'fullName',
      label: '考生姓名',
      type: 'input',
      placeholder: '输入考生姓名',
      colLayout: {
        span: 4
      }
    },
    {
      field: 'cardId',
      label: '身份证号',
      type: 'input',
      placeholder: '输入身份证',
      colLayout: {
        span: 4
      }
    },
    {
      field: 'status',
      label: '考试状态',
      type: 'select',
      options: [
        { title: '默认', value: 0 },
        { title: '待考', value: 1 },
        { title: '已考', value: 2 },
        { title: '过期', value: 3 }
      ],
      colLayout: {
        span: 4
      }
    },
    {
      field: 'date',
      label: '日期查询',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        type: 'daterange'
      },
      colLayout: {
        span: 7
      }
    },
    {
      type: 'div',
      colLayout: {
        // span: 5,
        sm: 5,
        xs: 12
      },
      children: [
        {
          type: 'button',
          btnContent: '重置',
          btnType: 'default',
          emit: 'resetEvent'
        },
        {
          type: 'button',
          btnContent: '搜索',
          btnType: 'primary',
          emit: 'searchEvent'
        }
      ]
    }
  ]
}
