<template>
   <div>
    <h2>
        Thông tin chi tiết
    </h2>
    <p>Id:{{ user.id }}</p>
    <p>Name:{{ user.username }}</p>
    <p>Email:{{ user.email }}</p>
    <p>Age:{{ user.age }}</p>
   </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const user=ref({
    id:0,
    username:'',
    email:'',
    age:0
});
const route=useRoute();
let users=[
    {
        id:1,
        username:'Nguyễn Văn A',
        email:'nguyen@gmail.com',
        age:25
    },
    {
        id:2,
        username:'Nguyễn Văn B',
        email:'nguyen@gmail.com',
        age:25
    }
]
onMounted(()=>{
    const idUser=+route.params.id;
    console.log(idUser);
    const userFind=users.find(u=>u.id==idUser);
    if(userFind){
        user.value=userFind;
    }
})
</script>

<style>

</style>