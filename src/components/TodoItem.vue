<template>
    <div>
        <p>{{todo}}<button @click="$emit('remove')">Remove</button></p>
    </div>
</template>

<script>
export default {
    name:"TodoItem",
    props: ['todo'],
}
</script>