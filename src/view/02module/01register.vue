<template>
  <back-page></back-page>

  <!-- 组件名 -->
  <div class="demo"></div>

  <!-- 组件名大小写 -->
  <div class="demo"></div>

  <!-- 全局注册 -->
  <div class="demo">
    <back-top></back-top>
  </div>
</template>

<script>
import backPage from '../../components/Back.vue'
export default {
  name: 'register',

  data () {
    return {}
  },

  components: {
    backPage
  },

  methods: {}
}
</script>