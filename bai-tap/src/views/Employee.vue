<template>
    <div>
        <h2>Trang employee</h2>
        <p>Id:{{ id }}</p>
        <RouterLink :to="{name:'Contacts',params:{id:id}}">Contacts</RouterLink>
        <p></p>
        <RouterLink :to="{name:'Projects',params:{id:id}}">Projects</RouterLink>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route=useRoute();
const id=ref(0)
onMounted(()=>{
    id.value=route.params.id;
    console.log(id);
}) 


</script>

<style>

</style>