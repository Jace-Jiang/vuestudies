<template>
  <div>
    <h3 class="text-center red">长白菜同样不好吃</h3>
    <ul class="text-center spacing" style="padding: 0">
      <li v-for="item in links" :key="item.id"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        links: [
          {
            id: 1,
            text: '不知道什么白菜',
            route: '/page01/page01-b/end'
          },
          {
            id: 2,
            text: '饿了',
            route: '/home'
          }
        ]
      }
    }
  }
</script>
