<template>
    <div class="examinee">
        <page-search
            :searchFormConfig="emFormConfig"
            :formData="formData"
            @changeModel="handleChangeModels"
            @searchClick="handleSearch"
            @resetClick="handleReset"
        >
        </page-search>
        <el-table class="examinee-table" :data="examineeTableData">
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="fullName" label="用户名" />
            <el-table-column prop="cardId" label="身份证" />
            <el-table-column prop="testDate" label="考试时间"  />
            <el-table-column prop="address" label="地址"  />
            <el-table-column prop="agency" label="机构"  />
            <el-table-column prop="aircraftCategory" label="类别"  />
            <el-table-column prop="grade" label="等级"  />
            <el-table-column prop="aircraftType" label="飞机类型"  />
        </el-table>
    </div>
</template>

<script>
import { ref } from 'vue'
import PageSearch from '@/components/page-search/index'
import { emFormConfig } from './config/search.config'
import { requestSelectExaminee } from '@/service/main/exam/examinee/examinee'
export default {
    components: {
        PageSearch
    },
    setup () {
        const formData = ref({
            fullName: '',
            cardId: '',
            status: 0,
            date: []
        })
        const examineeTableData = ref([])

        const handleChangeModels = (event) => {
            formData.value = event
        }
        const handleSearch = () => {
            const selectObj = {
                fullName: formData.value.fullName,
                cardId: formData.value.cardId,
                status: formData.value.status,
                startTime: formData.value.date[0],
                endTime: formData.value.date[1],
                limit: 10,
                page: 1
            }
            
            requestSelectExaminee(selectObj)
            .then((res) => {
                examineeTableData.value = res.data
            })
        }
        const handleReset = () => {
            
        }

        return {
            emFormConfig,
            examineeTableData,
            formData,
            handleChangeModels,
            handleSearch,
            handleReset
        }
    }
}
</script>

<style lang="less" scoped>
.examinee{
    padding: 20px;
    background-color: #fff;
    .examinee-table{
        margin-top: 50px;   
    }
}
</style>