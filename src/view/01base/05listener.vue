<template>
  <back-page></back-page>
  <!-- 计算属性 -->
  <div class="demo">
    <p>Has published books:</p>
    <p>Author：{{ author.name }}</p>
    <span>{{ author.books.length > 0 ? "有书" : "没书" }}</span>
    <ol v-if="author.books.length > 0">
      <li v-for="item in author.books" :key="item">{{ item }}</li>
    </ol>
  </div>

  <!-- 基本例子 使用计算属性 -->
  <div class="demo">
    <p>Has published books:</p>
    <p>Author：{{ author.name }}</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>

  <!-- 计算属性缓存 vs 方法 -->
  <div class="demo">
    <p>{{ calculateBooksMessage() }}</p>
  </div>

  <!-- 计算属性的 Setter -->
  <div class="demo">计算属性的 Setter (不太理解) {{ fullName.getter }}</div>

  <!-- 侦听器 -->
  <div class="demo">
    <p>
      Ask a yes/no question:
      <input v-model="question" placeholder="问句需要带问号才能侦听到" />
    </p>
    <p>{{ answer }}</p>
    <img :src="url" />
  </div>

  <!-- 计算属性 vs 侦听器 -->
  <div class="demo">
    {{ fullName }}
  </div>
</template>

<script>
import backPage from '../../components/Back.vue'
import axios from 'axios'
export default {
  name: "listener",

  data() {
    return {
      author: {
        name: "Jace Jiang",
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      url: '',
      firstName: 'Foo',
      lastName: 'Bar',
      //fullName: 'Foo Bar',
    }
  },

  components: {
    backPage
  },

  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1 || newQuestion.indexOf('？') > -1) {
        this.getAnswer()
      }
    },

    firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    }
  },

  computed: {
    // 计算属性的 getter
    publishedBooksMessage() {
      // `this` points to the vm instance
      return this.author.books.length > 0 ? '有书' : '没书'
    },

    fullName() {
      return 'fullname1:' + this.firstName + ' ' + this.lastName
    },

    //计算属性的 Setter 却在 计算属性 vs 侦听器 使用上 （注释后，fullname1却起作用，意思是“:”优先于“()”）
    fullName: {
      // getter
      get() {
        return 'fullname2:' + this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },

  },

  methods: {
    //我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 list，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 list。
    //如果没有缓存，我们将不可避免的多次执行 list 的 getter！如果你不希望有缓存，请用 method 来替代。
    calculateBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },

    getAnswer() {
      this.answer = 'Thinking...'
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
          this.answer = response.data.answer
          this.url = response.data.image
        })
        .catch(error => {
          this.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
}
</script>