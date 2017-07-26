<template>
  <nav>
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-list"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-14052229"></i>
      <span>添加</span>
    </router-link>
  </nav>
</template>
<script>
  export default {
    data(){
      return {}
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style scoped lang="less">
  nav {
    position: fixed;
    margin-top: 60px;
    left: 0;
    bottom: 0;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #ccc;
    background: white;
    border-top: 1px solid #ccc;
    a {
      margin: 0 10px;
      i {
        font-size: 20px;
      }
    }
    .active {
      color: orange;
    }
  }
</style>
