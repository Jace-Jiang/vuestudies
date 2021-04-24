<template>
    <table>
        <tr>
            <td>
                <div class="title">
                    <p>{{title}}</p>
                    <img src="../assets/horse.jpg">
                </div>
            </td>
            <td>
                <p class="demo">基础</p>
                <ul v-for="item in baseList" :key="item.id">
                    <li @click="linkClick(item.path)">{{item.text}}</li>
                </ul>
            </td>
            <td>
                <p class="demo">深入组件</p>
                <ul v-for="item in moduleList" :key="item.id">
                    <li @click="linkClick(item.path)">{{item.text}}</li>
                </ul>
            </td>
        </tr>
    </table>
</template>

<script>

export default {
    name:"home",

    data(){
        return {
            title:"vue3 studies",
            baseList:[ 
                { id:1, text:"介绍", path:"introduce" },
                { id:2, text:"应用 & 组件实例", path:"application" },
                { id:3, text:"模板语法", path:"build" },
                { id:4, text:"Data Property 和方法", path:"build" },
                { id:5, text:"计算属性和侦听器", path:"build" },
                { id:6, text:"Class 与 Style 绑定", path:"build" },
                { id:7, text:"条件渲染", path:"build" },
                { id:8, text:"列表渲染", path:"build" },
                { id:9, text:"事件处理", path:"build" },
                { id:10, text:"表单输入绑定", path:"build" },
                { id:11, text:"组件基础", path:"build" }
            ],
            moduleList:[ 
                { id:1, text:"组件注册", path:"build" },
                { id:2, text:"Props", path:"build" },
                { id:3, text:"非 Prop 的 Attribute", path:"build" },
                { id:4, text:"自定义事件", path:"build" },
                { id:5, text:"插槽", path:"build" },
                { id:6, text:"提供 / 注入", path:"build" },
                { id:7, text:"动态组件 & 异步组件", path:"build" },
                { id:8, text:"模板引用", path:"build" },
                { id:9, text:"处理边界情况", path:"build" }
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
    .title {
        text-align: center;
        p {
            font-size: 32px;
            font-weight: bold;
            color: rgb(145, 16, 16);
        }
    }
    .demo {
        font-size: 23px;
        font-weight: bold;
        padding-left: 23px;
        color: rgb(145, 16, 16);
    }
    ul {
        width: 170px;
        li {
            cursor: pointer;
            font-weight: bold;
            color:rgb(45, 141, 185);
        }
    }
</style>
