<template>
  <back-page></back-page>
  <!-- 基本实例 -->
  <div class="demo">
    <div id="components-demo">
      <button-counter></button-counter>
    </div>
  </div>

  <!-- 组件的复用 -->
  <div class="demo">
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
  </div>

  <!-- 通过 Prop 向子组件传递数据 -->
  <div id="blog-post-demo" class="demo">
    <blog-post title="My journey with Vue"></blog-post>
    <blog-post title="Blogging with Vue"></blog-post>
    <blog-post title="Why Vue is so fun"></blog-post>
    在data中定义:
    <blog-post
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
    ></blog-post>
  </div>

  <!-- 监听子组件事件 -->
  <div id="blog-posts-events-demo" class="demo">
    <div v-bind:style="{ fontSize: postFontSize1 + 'em' }">
      <blog-post
        :title="title"
        :likes="1"
        @enlarge-text="postFontSize1 += 0.1"
      ></blog-post>
    </div>
  </div>

  <!-- 使用事件抛出一个值 -->
  <div class="demo" v-bind:style="{ fontSize: postFontSize2 + 'em' }">
    <blog-post
      :title="title"
      :likes="2"
      @enlarge-text2="postFontSize2 += $event"
    ></blog-post>
    <blog-post
      :title="title"
      :likes="2"
      @enlarge-text2="onEnlargeText"
    ></blog-post>
  </div>

  <!-- 在组件上使用 v-model -->
  <div class="demo">
    <input v-model="searchText" /> =
    <input :value="searchText" @input="searchText = $event.target.value" />
    <br />
    <custom-input
      :model-value="searchText"
      @update:model-value="searchText = $event"
    ></custom-input>
    <br />
    <custom-input v-model="searchText"></custom-input>
  </div>

  <!-- 通过插槽分发内容 -->
  <div id="slots-demo" class="demo">
    <alert-box> Something bad happened. </alert-box>
  </div>
</template>

<script>
import backPage from '../../components/Back.vue'
import buttonCounter from '../../components/ButtonCounter.vue'
import blogPost from '../../components/BlogPost.vue'
import customInput from '../../components/CustomInput.vue'
import alertBox from '../../components/AlertBox.vue'
export default {
  name: 'module',

  data () {
    return {
      title: "点击按钮时，请看字体的变化",
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize1: 1,
      postFontSize2: 1,
      searchText: '',
    }
  },

  components: {
    backPage,
    buttonCounter,
    blogPost,
    customInput,
    alertBox
  },

  methods: {
    onEnlargeText (enlargeAmount) {
      console.log(enlargeAmount)
      this.postFontSize2 += enlargeAmount
    }
  }
}
</script>

<style lang="less" scoped>
.demo-alert-box {
  padding: 10px 20px;
  background: #f3beb8;
  border: 1px solid #f09898;
}
</style>