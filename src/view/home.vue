<template>
    <div class="content">
        <div class="menu">
            <ul>
                <!-- 循环数据在点击调用changeli方法时将当前索引和本条数据传进去,并使用当前数据show的bool值添加或移除样式 -->
                <li :class="[{active:item.show}]" @click="changeli(index,item)" v-for="(item,index) in headerData" :key="item.id">
                    {{item.name}}
                    <!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
                    <ul v-show="item.show"> 
                        <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
                        <li v-for="a in item.list" v-on:click.stop="linkMenu(a.path)" :key="a.id">{{a.text}}</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="pic">重学前端(Vue3)</div>
    </div>
</template>

<script>

export default {
    name:"home",

    data(){
        return {
            headerData: [{
                    id:1,
                    name: '基础',
                    list: [
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
                    show: false
                }, {
                    id:2,
                    name: '深入组件',
                    list: [
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
                    show: false
                }, {
                    id:3,
                    name: '过渡&动画',
                    list: [
                        { id:1, text:"过渡 & 动画概述", path:"build" },
                        { id:2, text:"进入过渡 & 离开过渡", path:"build" },
                        { id:3, text:"列表过渡", path:"build" },
                        { id:4, text:"状态过渡", path:"build" }
                    ],
                    show: false
                }, {
                    id:4,
                    name: '可复用&组合',
                    list: [
                        { id:1, text:"混入", path:"build" },
                        { id:2, text:"混入", path:"build" },
                        { id:3, text:"Teleport", path:"build" },
                        { id:4, text:"渲染函数", path:"build" },
                        { id:4, text:"插件", path:"build" }
                    ],
                    show: false
                }, {
                    id:5,
                    name: '高阶指南',
                    list: [
                        { id:1, text:"响应性", path:"build" },
                        { id:2, text:"组合式API", path:"build" },
                        { id:3, text:"渲染机制和优化", path:"build" },
                        { id:4, text:"Vue2中的更改检测警告", path:"build" }
                    ],
                    show: false
                }, {
                    id:5,
                    name: '工具',
                    list: [
                        { id:1, text:"单文件组件", path:"build" },
                        { id:2, text:"测试", path:"build" },
                        { id:3, text:"TypeScript 支持", path:"build" },
                        { id:4, text:"Mobile", path:"build" }
                    ],
                    show: false
                }, {
                    id:5,
                    name: '规模化',
                    list: [
                        { id:1, text:"路由", path:"build" },
                        { id:2, text:"状态管理", path:"build" },
                        { id:4, text:"服务端渲染", path:"build" }
                    ],
                    show: false
                }, {
                    id:5,
                    name: '无障碍',
                    list: [
                        { id:1, text:"基础", path:"build" },
                        { id:2, text:"语义学", path:"build" },
                        { id:4, text:"标准", path:"build" },
                        { id:4, text:"资源", path:"build" }
                    ],
                    show: false
                }]
        }
    },

    components:{},

    methods:{
        changeli: function(ind, item) {
            // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
            this.headerData.forEach(i => {
                // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
                if (i.show !== this.headerData[ind].show) {
                    i.show = false;
                };
            });
            // 取反(true或false)
            item.show = !item.show;
        },
        linkMenu: function(route) {
            this.$router.push(route)
        }
    }
}
</script>

<style lang="less" scoped>
    .content {
        .menu {
            float: left;
            margin-left: 5px;
            width: 390px;
            background-color: #51add8;
            color: #ffffff;
            >ul {
                width: 100%;
                @include clearfix;
                >li {
                    width: 88%;
                    border: 1px solid #ffffff;
                    cursor: pointer; // float: left;
                    color: 20px;
                    text-align: center;
                    line-height: 60px;
                    &:hover {
                        background-color: #ff9800;
                    }
                    >ul {
                        width: 86%;
                        background: rgb(72, 175, 132);
                        li{
                            &:hover{
                                background: #bfd851;
                            }
                        }
                    }
                }
                .active {
                    background-color: #ff9800;
                }
            }
        }
        .pic {
            float:left;
            margin-left: 5px;
            text-align: center;
            font-size: 27px;
            font-weight: bold;
            font-family: Cursive;
            color: #ffffff;
            width: 880px;
            height: 484px;
            border: 1px solid #51add8;
            background: url("../assets/horse.jpg") 0 0 no-repeat;
            background-size: 100% 100%;
        }
    }

</style>
