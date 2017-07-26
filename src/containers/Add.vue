<template>
  <div>
    <m-header title="添加页面"></m-header>
    <div class="add">
      <div class="group">
        <label for="bookName">书名</label>
        <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
      </div>
      <div class="group">
        <label for="bookCover">书的地址</label>
        <input type="text" id="bookCover" placeholder="请输入书的地址" v-model="book.bookCover">
      </div>
      <div class="group">
        <label for="content">书的详情</label>
        <input type="text" id="content" placeholder="请输入书的详情" v-model="book.content">
      </div>
      <div class="group">
        <button @click="add">添加图书</button>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from 'components/Mheader';
  import {addBook} from 'api'
  export default {
    data(){
      return {
        book: {
          bookName: '',
          bookCover: '',
          content: ''
        }
      }
    },
    computed: {},
    components: {MHeader},
    methods: {
      add(){
        addBook(this.book).then(res => {
          this.$router.push('/list')
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .add {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    .group {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      label {
        font-size: 16px;
        line-height: 25px;
      }
      input {
        height: 30px;
        font-size: 15px;
        padding-left: 10px;
        border: 1px solid #cccccc;
      }
      button {
        height: 35px;
        font-size: 16px;
      }
    }
  }
</style>
