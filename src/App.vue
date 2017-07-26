<template>
  <div>
    <!--保持缓存-->
    <div class="content">
      <transition name="trans">
        <keep-alive>
          <router-view class="view"></router-view>
        </keep-alive>
      </transition>
    </div>
    <tab></tab>
  </div>
</template>
<script>
  import tab from 'components/Tab'
  export default {
    data(){
      return {}
    },
    components: {tab},
  }
</script>

<style scoped lang="less">
  .view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 65px;
    width: 100%;
  }
  .trans-enter {
    transform: translate(100%);
  }
  .trans-enter-active {
    transition: .3s linear;
  }
  .trans-leave-active {
    transition: .3s linear;
    transform: translate(-100%);
  }
</style>
