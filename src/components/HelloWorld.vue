<template>
  <div>
    <form>
      <input type="text" v-model="stu.id">
      <input type="text" v-model="stu.name">
      <input type="text" v-model="stu.age">
      <input type="submit" @click="addStu">
    </form>
    <ul>
      <li v-for="(tem,index) in state.stus" :key="tem.id" @click="remStu(index)">{{tem.name}}</li>
    </ul>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
    let cc=ref(123)
    console.log(cc.__v_isRef)
    let state = reactive({
      stus:[
        {id:1,name:"zhangsan",age:20},
        {id:2,name:"lisi",age:22},
        {id:3,name:"zhangsan",age:23}
      ]
    });
    let stu={id:null,name:"",age:0}
    function remStu(index){
      console.log(this)
      state.stus = state.stus.filter((stu,idx))
    }
    return {state,stu,remStu}
  }
}
</script>
