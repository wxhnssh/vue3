<script>
import MyButton from './component/MyButton.vue';
    export default{
        data() {
            return {
                msg: "Welcome to"
                
            }
        },
        components:{
            MyButton
        }
    }
</script>

<template>
    <h1>{{msg}}</h1> 
    <MyButton></MyButton> <br>
    <MyButton></MyButton>  <br>
    <MyButton></MyButton>  
</template>