<template>
<div class="user-info">
    <div class="v-card">
        <div class="toolbar">
            <div class="title align-center">
                <el-icon><Tickets /></el-icon>
                <span class="text">角色信息</span>
            </div>
        </div>
        <div class="content">
            <el-form label-width="100px">
                <el-form-item label="组织名">
                    <el-input v-model="organizeData.organizeName" disabled></el-input>
                </el-form-item>
                <el-form-item label="组织电话">
                    <el-input v-model="organizeData.phone" disabled></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="organizeData.address" disabled></el-input>
                </el-form-item>
                <el-form-item label="身份">
                    <span>组织</span>
                </el-form-item>
                <el-form-item label="概要">
                    <el-input type="textarea" v-model="organizeData.summary" disabled></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</div>
</template>

<script>
import { Tickets, Setting } from '@element-plus/icons-vue'
export default {
    props: {
        organizeData: {
            type: Object,
            default:() => {}
        }
    },
    components: {
        Tickets,
        Setting
    },
    setup() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.user{
    .v-card{
        margin-bottom: 25px;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: var(--box-shadow);
        .toolbar{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            .title{
                margin-left: 60px;
            }
        }
        .content{
            padding: 30px 15px;
            background-color: #EAEEF3;
        }
    }
}
.align-center{
    display: flex;
    align-items: center;
}
.text{
    margin: 0 5px;
}
</style>