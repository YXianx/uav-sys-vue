<template>
    <div class="user">
        <user-info :userData="userCpnInfo"/>
        <organize-info :organizeData="userCpnOrganize"/>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import OrganizeInfo from './cpns/OrganizeInfo.vue'
import UserInfo from './cpns/UserInfo.vue'
export default {
    components:{
        UserInfo,
        OrganizeInfo
    },
    setup () {
        // 1、获取用户信息
        const store = useStore()
        const userInfo = store.state.login.userInfo
        console.log(userInfo)
        const userCpnInfo = reactive({ userName: userInfo.userName, phone: userInfo.phone })
        const userCpnOrganize = reactive(userInfo.organize)

        return {
            userCpnInfo,
            userCpnOrganize
        }
    }
}
</script>

<style lang="less" scoped>

</style>