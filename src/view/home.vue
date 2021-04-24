<template>
    <div class="title">
        <p>{{title}}</p>
        <img src="../assets/horse.jpg">
    </div>
    <table align="center">
        <tr>
            <td valign="top">
                <p class="demo">基础</p>
                <ul v-for="item in baseList" :key="item.id">
                    <li @click="linkClick(item.path)">{{item.text}}</li>
                </ul>
            </td>
            <td valign="top">
                <p class="demo">深入组件</p>
                <ul v-for="item in moduleList" :key="item.id">
                    <li @click="linkClick(item.path)">{{item.text}}</li>
                </ul>
            </td>
            <td valign="top">
                <p class="demo">过渡&动画</p>
                <ul v-for="item in cartoonList" :key="item.id">
                    <li @click="linkClick(item.path)">{{item.text}}</li>
                </ul>
            </td>
            <td valign="top">
                <p class="demo">可复用&组合</p>
                <ul v-for="item in combinationList" :key="item.id">
                    <li @click="linkClick(item.path)">{{item.text}}</li>
                </ul>
            </td>
            <td valign="top">
                <p class="demo">高阶指南</p>
                <ul v-for="item in highList" :key="item.id">
                    <li @click="linkClick(item.path)">{{item.text}}</li>
                </ul>
            </td>
            <td valign="top">
                <p class="demo">工具</p>
                <ul v-for="item in toolsList" :key="item.id">
                    <li @click="linkClick(item.path)">{{item.text}}</li>
                </ul>
            </td>
            <td valign="top">
                <p class="demo">规模化</p>
                <ul v-for="item in scaleList" :key="item.id">
                    <li @click="linkClick(item.path)">{{item.text}}</li>
                </ul>
            </td>
            <td valign="top">
                <p class="demo">无障碍</p>
                <ul v-for="item in accessibleList" :key="item.id">
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
            title:"重学前端（vue3）",
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
            ],
            cartoonList:[ 
                { id:1, text:"过渡 & 动画概述", path:"build" },
                { id:2, text:"进入过渡 & 离开过渡", path:"build" },
                { id:3, text:"列表过渡", path:"build" },
                { id:4, text:"状态过渡", path:"build" }
            ],
            combinationList:[
                { id:1, text:"混入", path:"build" },
                { id:2, text:"混入", path:"build" },
                { id:3, text:"Teleport", path:"build" },
                { id:4, text:"渲染函数", path:"build" },
                { id:4, text:"插件", path:"build" }
            ],
            highList:[
                { id:1, text:"响应性", path:"build" },
                { id:2, text:"组合式API", path:"build" },
                { id:3, text:"渲染机制和优化", path:"build" },
                { id:4, text:"Vue2中的更改检测警告", path:"build" }
            ],
            toolsList:[
                { id:1, text:"单文件组件", path:"build" },
                { id:2, text:"测试", path:"build" },
                { id:3, text:"TypeScript 支持", path:"build" },
                { id:4, text:"Mobile", path:"build" }
            ],
            scaleList:[
                { id:1, text:"路由", path:"build" },
                { id:2, text:"状态管理", path:"build" },
                { id:4, text:"服务端渲染", path:"build" }
            ],
            accessibleList:[
                { id:1, text:"基础", path:"build" },
                { id:2, text:"语义学", path:"build" },
                { id:4, text:"标准", path:"build" },
                { id:4, text:"资源", path:"build" }
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
