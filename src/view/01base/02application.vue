<template>
    <back-page></back-page>
    <div class="demo">
        <ol>
            <li v-for="item in list" :key="item.id">
                <a :href="item.url" target="_blank">{{item.text}}</a>
            </li>
        </ol>
    </div>
    <div class="demo">

    </div>
    <img src="../../assets/lifecycle.png">
</template>

<script>
import backPage from '../../components/Back.vue'
export default {
    name:"application",
    
    data(){
        return {
            list:[
                { id:0, url:"https://segmentfault.com/a/1190000011381906/", text:"详解vue生命周期" },
                { id:1, url:"https://vue3js.cn/docs/zh/guide/instance.html#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%BA%94%E7%94%A8%E5%AE%9E%E4%BE%8B", text:"创建一个应用实例" },
                { id:2, url:"https://vue3js.cn/docs/zh/guide/instance.html#%E6%A0%B9%E7%BB%84%E4%BB%B6", text:"根组件" },
                { id:3, url:"https://vue3js.cn/docs/zh/guide/instance.html#%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B-property", text:"组件实例 property" },
                { id:4, url:"https://vue3js.cn/docs/zh/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90", text:"生命周期钩子" },
                { id:5, url:"https://vue3js.cn/docs/zh/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA", text:"生命周期图示" }
            ]
        }
    },

    components:{
        backPage
    },

    beforeMount(){},

    mounted(){},

    beforeUpdate(){},

    updated(){},

    beforeDestroy(){},

    destroyed(){}
}
</script>

<style lang="less" scoped>
.demo {
  a {
      color:rgb(155, 30, 30);
      text-decoration:none;
    }
}
</style>