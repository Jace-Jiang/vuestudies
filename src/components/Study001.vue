<template>
    <div>
        <ul>
            <li v-for="tem in stu" :key="tem.id">{{tem.name}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    mane:'App',
    data:function() {
        return {
            stu: [
                {id:1,name:"zhangsan",age:20},
                {id:2,name:"lisi",age:21},
                {id:3,name:"wangwu",age:23}
            ]
        }
    },
}
</script>
