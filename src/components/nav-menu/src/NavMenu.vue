<template>
    <div class="nav-menu">
        <div class="logo" :style="isCollapse?'width:64px':'width:210px'">
            <img src="../../../assets/logo.png" alt="">
            <span class="title" v-if="!isCollapse">无人机考评系统</span>
        </div>
        <el-menu class="nav-el-menu" :collapse="isCollapse" :collapse-transition="false">
            <template v-for="(item, index) in userMenus">
                <el-sub-menu :index="index + 1 + ''">
                    <template #title>
                        <el-icon><Link /></el-icon>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <template v-for="(subItem, subIndex) in item.children">
                        <router-link to="/main/system/user">
                            <el-menu-item :index="(index+1) + '-' + (subIndex+1)">
                                <span>{{ subItem.title }}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-sub-menu>
            </template>
        </el-menu>
    </div>
</template>
<script>
import { Link } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    props: {
        isCollapse: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    components:{
        Link
    },
    setup() {
        const store = useStore()
        const userMenus = computed(() => store.state.login.userMenus)

        return {
            userMenus
        }
    }
}
</script>
<style lang="less">
.el-menu{
    border-right: none;
}
.nav-menu{
    position: fixed;
    left: 0;
    top: 0;
    right: calc((100% - 210px));
    height: 100%;
    
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        transition: 0.3 width linear;
        img{
            width: 35px;
        }
        span{
            margin: 0 5px;
        }
    }
    .nav-el-menu{
        height: 100%;
    }
}
</style>