<template>
  <back-page></back-page>
  <!-- 对象语法 -->
  <div class="demo">
    开发者工具中看效果
    <div :class="{ active: isActive }"></div>
    <div
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
    ></div>
    <!-- 绑定的数据对象不必内联定义在模板里 -->
    <div :class="classObject"></div>
    <div :class="classComputedObject"></div>
  </div>

  <!-- 数组语法 -->
  <div class="demo">
    <div :class="[activeClass, errorClass]"></div>
  </div>

  <!-- 在组件上使用 -->
  <div class="demo">
    <back-page class="boo"></back-page>
  </div>

  <!-- 绑定内联样式 -->
  <div class="demo">
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      绑定内联样式
    </div>
  </div>
</template>

<script>
import backPage from '../../components/Back.vue'
export default {
  name: 'classstyle',

  data() {
    return {
      isActive: true,
      hasError: false,
      error: null,
      classObject: {
        active: true,
        'text-danger': true
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
    }
  },

  components: {
    backPage
  },

  computed: {
    classComputedObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },

  methods: {}
}
</script>

<style scoped>
.boo {
  background-color: blue;
}
</style>