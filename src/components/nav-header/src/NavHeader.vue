<template>
  <div class="nav-header">
    <el-icon :size="25" :color="'#333'" class="fold" @click="handleFoldClick">
      <template v-if="!isFold">
        <Fold />
      </template>
      <template v-else="isFold">
        <Expand />
      </template>
    </el-icon>
    <div class="user-control">
      <span class="user">{{ userInfo.name }}</span>
      <el-icon><ArrowDown /></el-icon>
    </div>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Expand, Fold, ArrowDown } from '@element-plus/icons-vue'
export default {
  components: {
    Expand,
    Fold,
    ArrowDown
  },
  setup(props, { emit }) {
    // 从vuex中获取用户信息
    const store = useStore()
    const userInfo = computed(() => store.state.login.userInfo)
    // 折叠菜单树
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldEvent', isFold.value)
    }
    return {
      userInfo,
      isFold,
      handleFoldClick
    }
  }
}
</script>
<style lang="less">
.nav-header {
  width: 100%;
  height: 60px;
  padding: 20px 25px;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  .fold {
    cursor: pointer;
  }
  .user-control {
    display: flex;
    align-items: center;
    .user {
      margin: 0 5px;
    }
  }
}
</style>
