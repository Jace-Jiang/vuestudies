<template>
  <back-page></back-page>
  <!-- 监听事件 -->
  <div class="demo">
    <div id="basic-event">
      <button @click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
  </div>

  <!-- 事件处理方法 -->
  <div id="event-with-method" class="demo">
    <!-- `greet` 在下面定义的方法名 -->
    <button @click="greet">Greet</button>
  </div>

  <!-- 内联处理器中的方法 -->
  <div id="inline-handler" class="demo">
    <button @click="say('hi')">Say hi</button>
    <button @click="say('what')">Say what</button>
  </div>

  <!-- 多事件处理器 -->
  <div class="demo">
    <!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
    <button @click="one($event), two($event)">Submit</button>
  </div>
</template>

<script>
import backPage from '../../components/Back.vue'
export default {
  name: 'event',

  data() {
    return {
      counter: 1,
      name: "Jace Jiang",
    }
  },

  components: {
    backPage
  },

  methods: {
    greet(event) {
      // `this` 内部 `methods` 指向当前活动实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },

    say(message) {
      alert(message)
    },

    one(event) {
      // first handler logic...
      alert("one event")
    },
    two(event) {
      // second handler logic...
      alert("two event")
    }
  }
}
</script>