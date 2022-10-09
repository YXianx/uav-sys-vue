<template>
<div class="user-info">
    <div class="v-card">
        <div class="toolbar">
            <div class="title align-center">
                <el-icon><Tickets /></el-icon>
                <span class="text">用户信息</span>
            </div>
            <div class="setting align-center">
                <el-icon><Setting /></el-icon>
                <span class="text">更改</span>
            </div>
        </div>
        <div class="content">
            <el-row>
                <el-col :span="6" class="avatar">
                    <el-avatar class="avatar-img" shape="square" :size="200" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                </el-col>
                <el-col :span="18" class="info">
                    <el-form label-width="100px">
                        <el-form-item label="用户名">
                            <el-input v-model="userData.userName" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="手机">
                            <el-input v-model="userData.phone" disabled></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">修改密码</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
    </div>
</div>
</template>

<script>
import { Tickets, Setting } from '@element-plus/icons-vue'
export default {
    props: {
        userData: {
            type: Object,
            default: () => ({
                userName: 'user',
                phone: '123455'
            })
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
            .avatar{
                display: flex;
                align-items: center;
                justify-content: center;
                background: #D5DCE5;
                border-bottom-left-radius: 6px;
                padding: 25px 0px 40px 0px;
                .avatar-img{
                }
            }
            .info{
                padding: 40px 15px;
                background-color: #EAEEF3;
                border-bottom-right-radius: 6px;
            }
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