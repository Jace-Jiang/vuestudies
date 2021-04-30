<template>
    <back-page></back-page>
    <!-- 用 v-for 把一个数组对应为一组元素 -->
    <div class="demo">
        <ul id="array-rendering">
            <li v-for="item in items" :key="item.id">
                {{ item.message }}
            </li>
        </ul>
    </div>

    <!-- 使用in或者of结果都一样，可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法 -->
    <div class="demo">
        <ul id="array-with-index">
            <li v-for="(item, index) of items" :key="index">
                {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
        </ul>
    </div>

    <!-- 在 v-for 里使用对象 -->
    <div class="demo">
        <ul id="v-for-object" class="demo">
            <li v-for="(value, name, index) in myObject" :key="index">
                {{ index }}. {{ name }}: {{ value }}
            </li>
        </ul>
    </div>

    <!-- 在 v-for 里使用值的范围 -->
    <div class="demo">
        <span v-for="n in 10" :key="n">{{ n }} </span>
    </div>

    <!-- 在组件上使用 v-for -->
    <div class="demo">
        <todo-item
            v-for="(item, index) in items"
            :todo="item.message"
            :index="index"
            :key="item.id"
        ></todo-item>
    </div>

    <div id="todo-list-example" class="demo">
        <form v-on:submit.prevent="addNewTodo">
            <label for="new-todo">Add a todo</label>
            <input
            v-model="newTodoText"
            id="new-todo"
            placeholder="E.g. Feed the cat"
            />
            <button>Add</button>
        </form>
        <ul>
            <todo-item
            v-for="(todo, index) in todos"
            v-bind:key="todo.id"
            v-bind:todo="todo.title"
            v-on:remove="todos.splice(index, 1)"
            ></todo-item>
        </ul>
    </div>

</template>

<script>
import backPage from '../../components/Back.vue'
import todoItem from '../../components/TodoItem.vue'
export default {
    name: 'render',

    data() {
        return {
            parentMessage: 'Parent',
            items: [
                    { id: 1, message: 'Foo' }, 
                    { id: 2, message: 'Bar' }
                ],
            myObject: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            newTodoText: '',
            todos: [
                {id: 1,title: 'Do the dishes'},
                {id: 2,title: 'Take out the trash'},
                {id: 3,title: 'Mow the lawn'}
            ],
            nextTodoId: 4
        }
    },

    components: {
        backPage,
        todoItem
    },

    methods: {
        addNewTodo() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
}
</script>