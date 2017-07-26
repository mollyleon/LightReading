<template>
  <div>
    <m-header title="列表页" class="header"></m-header>
    <scroller :on-refresh="refresh" ref="scroller" class="top">
      <ul class="list">
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.content}}</p>
            <p class="btn-list">
              <router-link :to='{path:"/update/"+book.id}' tag="button">修改</router-link>
              <button @click="remove(book.id)">删除图书</button>
            </p>
          </div>
        </li>
      </ul>
    </scroller>
    <loading v-if="isLoading"></loading>
  </div>
</template>
<script>
  import MHeader from 'components/MHeader';
  import Loading from 'components/Loading';
  import {getBook, removeBook} from 'api';
  export default {
    data(){
      return {books: [], isLoading: true}
    },
    created(){
      this.getList()
    },
    computed: {},
    components: {MHeader, Loading},
    methods: {
      remove(id){
        removeBook(id).then(res => {
          this.books = this.books.filter(item => item.id != id)
        })
      },
      refresh(){
        this.getList()
      },
      getList(){
        getBook().then(res => {
          this.books = res.data;
          this.isLoading = false;
          this.$refs.scroller.finishPullToRefresh();
        })
      },
    }
  }
</script>
<style scoped lang="less">
  .btn-list {
    display: flex;
    flex-direction: row;
    flex: 1  ;
    justify-content: space-between;
    margin: 5px;
    i {
      margin-right: 10px;
      font-size: 23px;
      color: orangered;
      vertical-align: middle;
    }
    button {
      width: 80px;
    }
  }
  .list {
    li {
      display: flex;
      border-bottom: 1px solid #ccc;
      img {
        width: 100px;
        height: 80px;
      }
      div {
        display: flex;
        flex-direction: column;
        h3 {
          color: #666;
          margin: 10px 0;
        }
      }
    }
    img[lazy='loading'] {
      background: url("../assets/loading.gif") no-repeat center;
      background-size: 50%;
    }
    img[lazy='loaded'] {
      animation: fadeIn .5s;
    }
  }
  .top{
    margin-top: 40px;
  }
  @keyframes fadeIn {
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }
</style>
