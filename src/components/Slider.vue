<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in data">
        <img :src="item" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper/dist/js/swiper'
  import SwiperCss from 'swiper/dist/css/swiper.css'
    export default {
      props: ['data'],
      data(){
        return {}
      },
      mounted(){
        new Swiper('.swiper-container', {
          autoplay: 1500,
          loop: true,
          pagination: '.swiper-pagination',

        })
      },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped lang="less">
  .swiper-slide{
    img{
      width: 100%;
    }
  }
</style>
