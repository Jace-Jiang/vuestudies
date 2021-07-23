<template>
  <div class="date-picker">
    <input v-if="likes == 1" type="datetime" />
    <select v-if="likes == 2">
      <option value="1">Yesterday</option>
      <option value="2">Today</option>
      <option value="3">Tomorrow</option>
    </select>
  </div>

  <div id="date-picker" class="date-picker" v-if="likes == 3">
    <date-picker @change="showChange"></date-picker>
  </div>
</template>

<script>
export default {
  name: 'datepicker',

  props: ['likes'],

  data() {
    return {}
  },

  components: {},

  methods: {}
}
</script>