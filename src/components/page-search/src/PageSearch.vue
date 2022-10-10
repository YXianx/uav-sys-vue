<template>
  <div class="page-search">
    <div class="header">
      <slot name="header" />
    </div>
    <yx-form
      ref="formRef"
      v-bind="searchFormConfig"
      :modelValue="formData"
      @update:modelValue="handleChangeModel"
      @resetEvent="resetClick"
      @searchEvent="searchClick"
    >
    <div class="footer">
      <slot name="footer" />
    </div>
    </yx-form>
  </div>
</template>

<script>
import { ref } from 'vue'
import YxForm from '@/base-ui/YxForm/index'
export default {
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    },
    formData: {
      type: Object,
      required: true
    }
  },
  components: {
    YxForm
  },
  setup (props, { emit }) {
    const formRef = ref()
    const handleChangeModel = (event) => {
      emit('changeModel', event)
    }
    const searchClick = () => {
      emit('searchClick')
    }
    const resetClick = () => {
      emit('resetClick')
    }
    return {
      formRef,
      handleChangeModel,
      searchClick,
      resetClick
    }
  }
}
</script>

<style lang="less" scoped>
.handle-btn {
  padding-left: 12px;
}
</style>
