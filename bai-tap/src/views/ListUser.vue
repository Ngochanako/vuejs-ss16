<template>
    <div>
        <div v-for="(user,index) in users" :key="index">
            <p>Id:{{ user.id }}</p>
            <p>name:{{ user.username }}</p>
            <p>email:{{ user.email }}</p>
            <p>age:{{ user.age }}</p>
            <button @click="handleClick(user.id)">Xem chi tiết</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router=useRouter();
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
const handleClick=(idUser)=>{
    router.push({name:'UserDetail',params:{id:idUser}})
}
</script>

<style>

</style>