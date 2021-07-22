<template>
  <!-- <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    > -->

  <input v-model="value" />
</template>

<script>
export default {
  name: 'CostomInput',

  props: ['modelValue'],

  data () {
    return {}
  },

  computed: {
    value: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>