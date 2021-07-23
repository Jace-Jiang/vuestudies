<template>
  <div>
    <input
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
    />
    <br />
    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"
    />
    <br />
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <br />
    <input type="text" :value="modelValue" @input="emitValue" />
  </div>
</template>

<script>
export default {
  name: 'CustomForm',

  props: {
    firstName: String,
    lastName: String,
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },

  data() {
    return {}
  },
  //   emits: {
  //     // 没有验证
  //     click: null,

  //     // 验证submit 事件
  //     submit: ({ email, password }) => {
  //       if (email && password) {
  //         return true
  //       } else {
  //         console.warn('Invalid submit event payload!')
  //         return false
  //       }
  //     }
  //   },
  methods: {
    // submitForm() {
    //   this.$emit('submit', { email, password })
    // }
  }
}
</script>

<style>
</style>