<template>
  <div>
    <a v-show="btnFlag" href="javascript:;" class="btn-scroll-to-top" @click="backTop" />
  </div>
</template>
<script>
export default {
  name: "BackTop",
  data() {
    return {
      btnFlag: false
    };
  },
  mounted() {
    document
      .getElementsByClassName("app-main")[0]
      .addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    document
      .getElementsByClassName("app-main")[0]
      .removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      var element = document.getElementsByClassName("app-main")[0];
      let timer = setInterval(() => {
        let ispeed = Math.floor(-element.scrollTop / 5);
        element.scrollTop = element.scrollTop + ispeed;
        if (element.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      var element = document.getElementsByClassName("app-main")[0];
      const that = this;

      if (element.scrollTop > 150) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>
<style scoped>
.btn-scroll-to-top {
  position: fixed;
  display: block;
  right: 15px;
  bottom: 80px;
  z-index: 1020;
  width: 50px;
  height:50px;
  border-radius: 50%;
  background:#2597f5 url('~@/assets/top-icon.png') no-repeat center center;
}

.btn-scroll-to-top:hover {
  text-decoration: none;
  background-size: 100% 100%;
  background:#51acf7 url('~@/assets/top-icon.png') no-repeat center center;

}

body .btn-scroll-to-top.in {
  display: block;
}
</style>
