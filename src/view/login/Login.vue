<template>
    <div class="login" v-if="sysInfo.pathBack" :style="'background: url(' + sysInfo.pathBack + ')center 30%'">
        <el-form :model="formLabelAlign" 
                 :rules="rules"
                 ref="ruleForm"
                 class="login-form">
            <el-form-item>
                <div class="title">{{ sysInfo.sysName }}</div>
            </el-form-item>
            <el-form-item prop="username">
                <el-input v-model="formLabelAlign.username" placeholder="用户名"/>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="formLabelAlign.password" type="password" placeholder="密码" show-password/>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="isKeepPwd" label="记住密码" size="large"></el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button color="#429488" class="btn-login" @click="submitForm">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {ref, reactive} from 'vue'
import { useStore } from 'vuex'
import {ElMessage} from 'element-plus'
import localCache from '@/utils/LocalCache'

import { reuqestSysInfo } from '@/service/init/init'
import { BASE_URL } from '@/service/request/config'
export default {
    setup(){
        // 1、请求登陆页资源
        const sysInfo = reactive({})
        reuqestSysInfo()
        .then(res => {
            Object.keys(res.data).forEach((item) => {
                if( item === 'sysName' ) {
                    sysInfo[item] = res.data[item]
                } else {
                    sysInfo[item] = BASE_URL + res.data[item]
                }
            })
        })

        // 2、处理表单逻辑
        const store = useStore()
        // 表单ref
        const ruleForm = ref(null)
        const isKeepPwd = ref(localCache.getCache('keepPwd') || false)
        // 表单内容
        const formLabelAlign = reactive({
            username: localCache.getCache('username') || '',
            password: localCache.getCache('password') || ''
        })
        // 表单验证规则
        const rules = reactive({
            username: [
                {required: true,message: '请输入用户名',trigger: 'blur'},
                {
                    pattern:/^[0-9a-zA-Z]{4,10}$/,
                    message: '长度在 4 到 10 个数字或字母',
                    trigger: 'blur'
                }
            ],
            password: [
                {required: true,message: '请输入密码',trigger: 'blur'},
                {min: 5,max: 15,message: '长度在 5 到 15 个字符',trigger: 'blur'}
            ]
        })
        // 登陆按钮
        const submitForm = ()=>{
            // 验证表单
            ruleForm.value.validate((valid)=>{
                if(valid){
                    if(isKeepPwd.value) {
                        localCache.setCache('username', formLabelAlign.username)
                        localCache.setCache('password', formLabelAlign.password)
                        localCache.setCache('keepPwd', isKeepPwd.value)
                    }
                    else {
                        localCache.removeCache('keepPwd')
                        localCache.removeCache('username')
                        localCache.removeCache('password')
                    }
                    store.dispatch('login/accountLoginAction', { userName: formLabelAlign.username, password: formLabelAlign.password })
                }
                else{
                    ElMessage({
                        type:"warning",
                        message: "信息未填写完整",
                    })
                }
            })
        }
        return {
            sysInfo,

            ruleForm,
            isKeepPwd,
            formLabelAlign,
            rules,

            submitForm
        }
    }
}
</script>
<style lang="less">
    .login{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        // background: url('@/assets/img/login/background.jpeg')center 30%;        
        .login-form{
            width: 450px;
            height: auto;
            margin-bottom: 80px;
            padding: 30px 30px;
            background: #fff;
            border-radius: 8px;
            .title{
                width: 100%;
                font-size: 24px;
                text-align: center;
                margin-bottom: 20px;
            }
            .btn-login{
                width: 100%;
            }
        }
    }
</style>