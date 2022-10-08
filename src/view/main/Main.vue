<template>
    <div class="main">
        <el-container>
            <el-aside :width="isCollapse ? '60px' : '210px'" class="main-nav">
                <nav-menu :isCollapse="isCollapse"/>
            </el-aside>
            <el-container>
                <el-header>
                    <nav-header @foldEvent="handleFoldEvent" />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script> 
import { ref } from 'vue'
import { NavMenu } from '@/components/nav-menu/index'
import { NavHeader } from '@/components/nav-header/index'
export default {
    components: {
        NavMenu,
        NavHeader
    },
    setup(){
        const isCollapse = ref(false)
        const handleFoldEvent = (fold) => {
            isCollapse.value = fold
        }

        return {
            isCollapse,
            handleFoldEvent
        }
    }
}
</script>
<style lang="less">
.el-header {
    --el-header-padding: 0 0px;
}
.main {
    // position: fixed;
    // left: 0;
    // top: 0;
    width: 100%;
    height: 100%;
    background-color: #f1f2f6;
    .main-nav {
        height: 100vh;
        transition: width 0.3s linear;
        -webkit-transition: width 0.15s;
        -moz-transition: width 0.15s;
        -webkit-transition: width 0.15s;
        -o-transition: width 0.15s;
    }
}
</style>