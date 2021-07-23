<template>
  <back-page></back-page>
  <div id="v-model-example" class="demo">
    <p>First name: {{ firstName }}</p>
    <p>Last name: {{ lastName }}</p>
    <custom-form
      v-model:first-name="firstName"
      v-model:last-name="lastName"
      v-model.capitalize="myText"
    ></custom-form>
  </div>
</template>

<script>
import backPage from '../../components/Back.vue'
import customForm from '../../components/CustomForm.vue'
export default {
  name: 'custom-event',

  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      modelValue: '',
      myText: ''
    }
  },

  components: {
    backPage,
    customForm
  },

  created() {
    console.log(this.modelModifiers) // { capitalize: true }
  },

  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  }

}
</script>

<style>
</style>