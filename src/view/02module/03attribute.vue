<template>
    <back-page></back-page>
    <div class="demo">
        <date-picker :likes="1"></date-picker>
        <date-picker :likes="2" @change="showChange"></date-picker>
    </div>
</template>

<script>
import backPage from '../../components/Back.vue'
import datePicker from '../../components/DatePicker.vue'
export default {
    name:'attribute',

    data() {
        return {}
    },

    components: {
        backPage,
        datePicker
    },

    methods: {
        showChange(event) {
            console.log(event.target.value) // 将记录所选选项的值
        }
    }
}
</script>