<template>
  <div>
    <back-page></back-page>
    <img src="../assets/build.jpg" />
  </div>
</template>

<script>
import backPage from '../components/Back.vue'
export default {
  name: "build",

  data() { },

  components: {
    backPage
  }
}
</script>
<style lang="less" scoped>
div {
  text-align: center;
}
</style>