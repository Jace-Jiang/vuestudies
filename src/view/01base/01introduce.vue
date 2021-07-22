<template>
  <back-page></back-page>
  <!-- 声明式渲染 -->
  <div id="counter" class="demo">Counter：{{ counter }}</div>
  <div id="bind-attribute" class="demo">
    <span v-bind:title="attributeMsg">
      Hover your mouse over me for a few seconds to see my dynamically-bound
      title!<br />
      (鼠标悬停几秒钟查看此处动态绑定的提示信息！)
      <!-- demo中要转换成普通开发模式怎么转？Vue.createApp(AttributeBindingApp).mount('#bind-attribute') 解答：类似于dom页面初始化 -->
    </span>
  </div>

  <!-- 处理用户输入 -->
  <div id="event-handling" class="demo">
    <p>{{ userMsg }}</p>
    <button v-on:click="reverseMessage">反转 Message</button>
  </div>
  <div id="two-way-binding" class="demo">
    <p>{{ changeMsg }}</p>
    <input v-model="changeMsg" />
  </div>

  <!-- 条件与循环 -->
  <div id="conditional-rendering" class="demo">
    <button @mousemove="floating">鼠标浮上去，取反操作</button>
    <span v-if="seen">现在你看到我了</span>
    <span v-else>你看不到我</span>
  </div>
  <div id="list-rendering" class="demo">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>

  <!-- 组件化应用构建 -->
  <div id="todo-list-app" class="demo">
    <!-- 现在我们为每个todo-item 提供todo对象todo对象是变量，即其内容可以是动态的。我们也需要为每个组件提供一个“key”，稍后再作详细解释。-->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item.text"
      v-bind:key="item.id"
    ></todo-item>
  </div>
</template>

<script>
import backPage from '../../components/Back.vue'
import TodoItem from '../../components/TodoItem.vue'
export default {
  name: "introduce",

  data () {
    return {
      counter: 0,
      attributeMsg: 'You loaded this page on ' + new Date().toLocaleString(),
      userMsg: "你好！李焕英。",
      changeMsg: "Hello Vue",
      seen: true,
      todos: [
        { id: 1, text: 'Learn JavaScript' },
        { id: 2, text: 'Learn Vue' },
        { id: 3, text: 'Build something awesome' }
      ],
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ],
    }
  },

  components: {
    backPage,
    TodoItem
  },

  //实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
  created () {
    this.init()
  },

  methods: {
    //声明式渲染
    init () {
      setInterval(() => {
        this.counter++
      }, 1000)
    },

    //处理用户输入
    reverseMessage () {
      this.userMsg = this.userMsg
        .split('')
        .reverse()
        .join('')
    },

    //条件与循环
    floating () {
      this.seen = !this.seen
    }
  }
}
</script>

<style lang="less" scoped>
</style>