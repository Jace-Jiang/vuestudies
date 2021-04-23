<template>
    <div id="rootApp">
    <H3>此框内为rootApp.vue中的内容，点击下面的router-link会消失</H3>
    <router-link v-bind:to="'/hello'">say Hello</router-link>
    <router-link v-bind:to="'/world'">say World</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'rootApp'
}
</script>