<template>
  <div class="date-picker">
    <input v-if="likes == 1" type="datetime" />
    <select v-if="likes == 2">
      <option value="1">Yesterday</option>
      <option value="2">Today</option>
      <option value="3">Tomorrow</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'datepicker',

  props: ['likes'],

  data () {
    return {}
  },

  components: {},

  methods: {}
}
</script>