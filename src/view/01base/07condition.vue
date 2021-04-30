<template>
    <back-page></back-page>
    <div class="demo">
        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>

        <div v-if="Math.random() > 0.5">
            Now you see me （{{Math.random()}}）
        </div>
        <div v-else>
            Now you don't （{{Math.random()}}）
        </div>

        <h1 v-show="ok">
            Hello!
            <p style="font-size:14px;">
                v-if vs v-show <br>
                v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。 <br>

                v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。 <br>

                相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。 <br>

                一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。 <br>
            </p>
        </h1>
    </div>
</template>

<script>
import backPage from '../../components/Back.vue'
export default {
    name:'condition',

    data() {
        return {
            awesome:false,
            ok:true,
        }
    },

    components: {
        backPage
    },

    methods: {}
}
</script>