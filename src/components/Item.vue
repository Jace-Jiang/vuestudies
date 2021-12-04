<template>
  <div>
      <label v-if="label">{{label}}</label>
      <slot></slot>
      <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        error: {
            type: String,
            default: ''
        },
        prop: {
            type: String
        }
    }

}
</script>

<style>

</style>