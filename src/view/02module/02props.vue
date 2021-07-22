<template>
  <back-page></back-page>
  <div class="demo">
    <blog-post
      :likes="3"
      :propA="56"
      :propE="{
        name: 'Veronica',
        company: 'Veridian Dynamics',
      }"
    ></blog-post>
  </div>
</template>

<script>
import backPage from '../../components/Back.vue'
import blogPost from '../../components/BlogPost.vue'
export default {
  name: 'props',

  data() {
    return {}
  },

  components: {
    backPage,
    blogPost
  },

  methods: {}
}
</script>