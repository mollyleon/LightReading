<template>
  <div class="header">
    {{title}}
  </div>
</template>
<script>
  export default {
      props:['title'],
    data(){
      return {}
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style scoped lang="less">
  .header{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #666;
    background: #eee;
  }
</style>
