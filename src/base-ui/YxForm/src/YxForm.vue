<template>
  <div class="yx-form">
    <el-form>
      <el-row>
        <template v-for="item in formItems" :key="item">
          <el-col v-bind="item.colLayout?item.colLayout:colLayout">
            <el-form-item
              :label="item.label"
              :label-width="labelWidth"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-model="formData[`${item.field}`]"
                  type="input"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select type="select" v-model="formData[`${item.field}`]">
                  <el-option
                    v-for="option in item.options"
                    :key="option.title"
                    :label="option.title"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                  value-format="YYYY-MM-DD"
                ></el-date-picker>
              </template>
              <template v-else-if="item.type === 'div'">
                <template v-for="sItem in item.children" :key="sItem">
                  <template v-if="sItem.type === 'button'">
                    <el-button :type="sItem.btnType" @click="handleBtnClick(sItem.emit)">{{ sItem.btnContent }}</el-button>
                  </template>
                </template>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '0 44px' })
    },
    // 全列占比统一属性 也可在单独item项配置colLayout 两种方式选其一
    colLayout: {
      type: Object,
      default: () => ({ span: 8 })
    }
  },
  emits: ['update:modelValue', 'searchEvent', 'resetEvent'],
  setup (props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue, oldValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )

    // 传递button点击信号
    const handleBtnClick = (emitName) => {
      emit(emitName)
    }

    return {
      formData,
      handleBtnClick
    }
  }
}
</script>

<style lang="less" scoped></style>
