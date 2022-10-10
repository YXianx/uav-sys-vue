<template>
  <div class="user-management">
    <yx-form
      v-bind="searchFormConfig"
      :modelValue="formModels"
      @update:modelValue="handleChangeModel"
    />
    <!-- <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table> -->
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import YxForm from '@/base-ui/YxForm/index'
import { searchFormConfig } from './config/search.config.js'
import { requestUserListByName } from '@/service/main/system/user-management/user-management'
export default {
  components: {
    YxForm
  },
  setup() {
    const formModels = ref({
      userName: '',
      nickName: ''
    })
    const handleChangeModel = (event) => {
      formModels.value = event
    }

    const userList = reactive({})
    requestUserListByName().then((res) => {
      userList.value = res
      console.log(userList.value)
    })

    return {
      searchFormConfig,
      userList,
      formModels,
      handleChangeModel
    }
  }
}
</script>

<style lang="less" scoped>
.user-management {
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
}
</style>
