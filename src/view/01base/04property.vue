<template>
    <div>
        <back-page></back-page>
        <!-- 方法 -->
        <div class="demo">
            {{count}}
            <button @click="increment">Up vote</button>
            <!-- <span :title="toTitleDate(date)">
                {{ formatDate(date) }}
            </span> -->
        </div>
        <!-- 防抖和节流 -->
        <div class="demo">
            <button @click="debouncedClick">
                Save
            </button>
        </div>
    </div>
</template>

<script>
import backPage from '../../components/Back.vue'
export default {
    name:"property",
    
    data(){
        return {
            count: 3,
        }
    },

    components:{
        backPage
    },

    created() {
        // 用 Lodash 的防抖函数
        //this.debouncedClick = _.debounce(this.click, 500)
    },
    unmounted() {
        // 移除组件时，取消定时器
        //this.debouncedClick.cancel()
    },

    methods:{
        increment() {
            // `this` 指向该组件实例
            this.count++
        },

        click() {
        // ... 响应点击 ...
            alert("你出来了？")
        },
    }
}
</script>

<style lang="less" scoped>

</style>