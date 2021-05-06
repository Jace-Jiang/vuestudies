<template>
    <div class="blog-post">
      <h4>{{ title }}</h4>
      <button v-if="likes == 1" @click="$emit('enlarge-text')">
        监听子组件事件
      </button>

      <button v-if="likes == 2" @click="$emit('enlarge-text2', 0.1)">
        使用事件抛出一个值
      </button>
    </div>
</template>

<script>
export default {
    name:'BlogPost',

    //props: ['title'],
    props: {
        title: String,
        likes: Number,
    },

    data() {
        return {}
    }
}
</script>