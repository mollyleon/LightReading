<template>
  <div>
    <m-header title="轻阅"></m-header>
    <div v-if="sliders.length">
      <slider :data="sliders"></slider>
    </div>
    <h3>最新图书</h3>
    <ul class="hot">
      <li v-for="hot in hots">
        <img :src="hot.bookCover" alt="">
        <span>{{hot.bookName}}</span>
      </li>
    </ul>
    <loading v-if="isLoading"></loading>
  </div>
</template>
<script>
  import {getSliders, getHot} from 'api';
  import slider from 'components/Slider';
  import Loading from 'components/Loading';
  import MHeader from 'components/MHeader';
  export default {
    data(){
      return {sliders: [], hots: [], isLoading: true}
    },
    created(){
      getSliders().then(res => {
        this.sliders = res.data;
      });
      getHot().then(res => {
        this.hots = res.data;
        this.isLoading=false
      })
    },
    computed: {},
    components: {
      slider,
      Loading,
      MHeader
    },
    methods: {}
  }
</script>
<style scoped lang="less">
  h3 {
    color: #666;
    padding-left: 2%;
    font-weight: normal;
    margin: 10px 0;
  }

  .hot {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      text-align: center;
      flex-direction: column;
      width: 33.33%;
      img {
        width: 100%;
      }
    }
  }
</style>
