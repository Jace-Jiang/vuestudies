<template>
  <div>
    <button @click="backPage">返回首页</button>
  </div>
</template>

<script>
export default {
  name: 'Back',
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  methods:{
    backPage(){
      this.$router.push("/")
    }
  }
}
</script>

<style lang="less" scoped>
  div {
    button {
      cursor: pointer;
    }
  }
</style>
