<template>
    <div>{{title}}</div>
    <ul v-for="item in list" :key="item.id">
        <li @click="linkClick(item.path)">{{item.text}}</li>
    </ul>
</template>

<script>

export default {
    name:"home",

    data(){
        return {
            title:"vue3 studies",
            list:[
                {
                    id:1,
                    text:"基础",
                    path:"introduce"
                },
                {
                    id:2,
                    text:"深入组件",
                    path:"application"
                },
                {
                    id:3,
                    text:"过渡&动画",
                    path:"introduce"
                },
                {
                    id:4,
                    text:"可复用&组合",
                    path:"introduce"
                },
                {
                    id:5,
                    text:"高阶指南",
                    path:"introduce"
                },
                {
                    id:6,
                    text:"工具",
                    path:"introduce"
                },
                {
                    id:7,
                    text:"规模化",
                    path:"introduce"
                },
                {
                    id:8,
                    text:"无障碍",
                    path:"introduce"
                }
            ]
        }
    },

    components:{},

    methods:{
        linkClick(route){
            this.$router.push(route)
        }
    }
}
</script>

<style lang="less" scoped>
    ul {
        width: 200px;
        li {
            cursor: pointer;
            font-weight: bold;
            color:rgb(45, 141, 185);
        }
    }
</style>
