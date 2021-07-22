<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button v-if="likes == 1" @click="$emit('enlarge-text')">
      监听子组件事件
    </button>

    <button v-if="likes == 2" @click="$emit('enlarge-text2', 0.1)">
      使用事件抛出一个值
    </button>

    <!-- 深入组件 Props -->
    <div v-if="likes == 3">
      {{ propA }} <br />
      {{ propE }} ||| {{ propE.name }} | {{ propE.company }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',

  //props: ['title'],
  props: {
    title: String,
    likes: Number,

    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    },
    // 具有默认值的函数
    propG: {
      type: Function,
      // 与对象或数组默认值不同，这不是一个工厂函数 —— 这是一个用作默认值的函数
      default: function () {
        return 'Default function'
      }
    }
  },

  data() {
    return {}
  }
}
</script>