<template>
    <div>
        <ol>
            <li>{{ todo.text }}</li>
        </ol>
    </div>
</template>

<script>
export default {
    name:"TodoItem",
    props: ['todo'],
}
</script>