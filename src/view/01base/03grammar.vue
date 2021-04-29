<template>
    <back-page></back-page>
    <!-- 文本 -->
    <div class="demo">
        <div>Mustache-会改变：{{mustacheMsg}}</div>
        <div v-once>通过使用 v-once 指令：{{mustacheMsg}}</div>
        信息输入：<input style="width:60%;" v-model="mustacheMsg">
        <div v-once>OnceChange：{{onceMsg}}</div>
    </div>
    
    <!-- 原始 HTML -->
    <div id="example1" class="demo">
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>

    <!-- Attribute -->
    <div class="demo">
        <div v-bind:id="dynamicId"></div>
        <button v-bind:disabled="isButtonDisabled">按钮</button>
    </div>

    <!-- 使用 JavaScript 表达式 -->
    <div class="demo">
        {{ number + 1 }}
        {{ ok ? 'YES' : 'NO' }} 
        {{ message.split('').reverse().join('')}}
        <div v-bind:id="'list-' + number"></div>
    </div>

    <!-- 指令 -->
    <div class="demo">
        <p v-if="seen">指令 (Directives) 是带有 v- 前缀的特殊 attribute。指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 和 v-on 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。</p>
    </div>

    <!-- 参数 -->
    <div class="demo">
        <a v-bind:href="url" target="_blank"> 接收参数 </a>
        <a v-on:click="doSomething"> 点击按钮</a>
    </div>

    <!-- 动态参数 -->
    <div class="demo">
        <a v-bind:[attributeName]="url"> 动态参数(开发者工具看效果) </a>
        <a v-on:[eventName]="doSomething"> 点击按钮 </a>
    </div>

    <!-- 修饰符 -->
    <div class="demo">
        <form v-on:submit.prevent="onSubmit">提交表单  ... （没看到效果）</form>
    </div>

    <!-- 缩写 -->
    <div class="demo">
        <!-- 完整语法 -->
        <a v-bind:href="url" target="_blank"> 完整语法 </a>
        <!-- 缩写 -->
        <a :href="url" target="_blank"> 缩写 </a>
        <!-- 动态参数的缩写 -->
        <a :[attributeName]="url" target="_blank"> 动态参数的缩写 </a>
        <!-- 完整语法 -->
        <a v-on:click="doSomething" target="_blank"> 完整语法 </a>
        <!-- 缩写 -->
        <a @click="doSomething" target="_blank"> 缩写 </a>
        <!-- 动态参数的缩写 (2.6.0+) -->
        <a @[eventName]="doSomething" target="_blank"> 动态参数的缩写 (2.6.0+) </a>
    </div>
</template>

<script>
import backPage from '../../components/Back.vue'
export default {
    name:'grammar',

    data() {
        return {
            mustacheMsg:'数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：',
            onceMsg:'通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。' + new Date().toLocaleString(),
            rawHtml: '<span style="color: red">This should be red.</span>',
            number:0,
            ok:"YES",
            message:"五一放假",
            seen:true,
            url:"https://vue3js.cn/docs/zh/guide/template-syntax.html#%E5%8F%82%E6%95%B0",
            attributeName:"url",
            eventName:"click",
        }
    },

    components:{
        backPage
    },

    methods:{
        doSomething() {
            alert("你好吗？")
        },

        onSubmit(){
            alert("提交你的表单")
        }
    }

}
</script>

<style lang="less" scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>