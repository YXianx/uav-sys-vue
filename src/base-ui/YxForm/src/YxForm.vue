<template>
    <div class="yx-form">
        <div class="header">
            <slot name="header" />
        </div>
        <el-form>
            <el-row>
                <template v-for="item in formItems">
                    <el-col v-bind="colLayout">
                        <el-form-item 
                            :label="item.label"
                            :label-width="labelWidth"
                            :style="itemStyle">
                            <template v-if="item.type === 'input' || item.type === 'password'">
                                <el-input v-model="formData[`${item.field}`]" type="input" :placeholder="item.placeholder"></el-input>
                            </template>
                            <template v-else-if="item.type === 'select'">
                                <el-select type="select" v-model="formData[`${item.field}`]">
                                    <el-option v-for="option in item.options" :key="option.title" :label="option.title" :value="option.value">{{ option.title }}</el-option>
                                </el-select>
                            </template>
                            <template v-else-if="item.type === 'datepicker'">
                                <el-date-picker v-model="formData[`${item.field}`]" v-bind="item.otherOptions" value-format="YYYY-MM-DD"></el-date-picker>
                            </template>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
        </el-form>
        <div class="footer">
            <slot name="footer" /> 
        </div>
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
            default: () => ([])
        },
        labelWidth: {
            type: String,
            default: '100px'
        },
        itemStyle: {
            type: Object,
            default: () => ({ padding: '0 44px' })
        },
        colLayout: {
            type: Object,
            default: () => ({ span: 8 })
        }
    },
    emits: ['update:modelValue'],
    setup(props,{ emit }) {
        const formData = ref({...props.modelValue})
        watch(
            formData,
            (newValue, oldValue) => {
                emit('update:modelValue', newValue)
            },
            {
                deep: true
            }
        )
        
        return {
            formData
        }
    }
}
</script>

<style lang="less" scoped>

</style>