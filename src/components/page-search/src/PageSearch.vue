<template>
    <div class="page-search">
        <yx-form v-bind="searchFormConfig" :modelValue="formData" @update:modelValue="handleChangeModel">
            <template #header>
                <h1>高级检索</h1>
            </template>
            <template #footer>
                <div class="handle-btn">
                    <el-button @click="resetClick">重置</el-button>
                    <el-button type="primary" @click="searchClick">搜索</el-button>
                </div>
            </template>
        </yx-form>
    </div>
</template>

<script>
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
            handleChangeModel,
            searchClick,
            resetClick
        }
    }
}
</script>

<style lang="less" scoped>
.handle-btn{
    padding-left: 12px;
}
</style>