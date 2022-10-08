<template>
    <div class="user">
        <user-info />
        <about-info />
    </div>
</template>

<script>
import AboutInfo from './cpns/AboutInfo.vue'
import UserInfo from './cpns/UserInfo.vue'
export default {
    components:{
        UserInfo,
        AboutInfo
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="less" scoped>

</style>