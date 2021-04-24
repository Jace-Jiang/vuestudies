<template>
    <div>{{title}}</div>
    <ul v-for="item in list" :key="item.id">
        <li>{{item.text}}</li>
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
                    text:"基础"
                },
                {
                    id:2,
                    text:"深入组件"
                },
                {
                    id:3,
                    text:"过渡&动画"
                },
                {
                    id:4,
                    text:"可复用&组合"
                },
                {
                    id:5,
                    text:"高阶指南"
                },
                {
                    id:6,
                    text:"工具"
                },
                {
                    id:7,
                    text:"规模化"
                },
                {
                    id:8,
                    text:"无障碍"
                }
            ]
        }
    },

    components:{},

    methods:{

    }
}
</script>
