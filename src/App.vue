<template>
  <div id="app">
    <ul>
      <li v-for="item in links" :key="item.text"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        links: [
          {
            text: '首页',
            route: '/home'
          },
          {
            text: '页面1',
            route: '/page01'
          },
          {
            text: '页面2',
            route: '/page02'
          }
        ]
      }
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: calc(100vh);
    background:url("./assets/horse.jpg") no-repeat fixed top;
  }
  .text-center {
    text-align: center;
  }
  .spacing {
    margin-top: 30px;
  }
  .red {
    color: darkred;
  }
  ul li {
    display: inline-block;
    margin-right: 10px;
  }
  ul li a{
    display: inherit;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
  ul li a:hover{
    cursor: pointer;
    color: #fff;
    background-color: #138bec;
    border: 1px solid #138bec;
  }
</style>
