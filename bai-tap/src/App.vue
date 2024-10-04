
<template>
  <div>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <p>Bài 1</p>
    <RouterLink to="/about">Go to About</RouterLink>
    <p>Bài 2</p>
    <RouterLink to="/contact">Go to Contact</RouterLink>
    <p>Bài 3</p>
    <RouterLink to="/register">Go to Register</RouterLink>
    <p>Bài 4</p>
    <RouterLink to="/login">Go to Login</RouterLink>
    <p>Bài 5</p>
    <RouterLink to="/l">Link không hợp lệ</RouterLink>
    <p>Bài 6</p>
    <div style="display: flex;gap:20px">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <p>Bài 7</p>
    <div style="display: flex;gap:20px;align-items: center;">
      <RouterLink to="/" exact-active-class="active" class="nav">Home</RouterLink>
      <RouterLink to="/about" exact-active-class="active" class="nav">About</RouterLink>
      <RouterLink to="/contact" exact-active-class="active" class="nav">Contact</RouterLink>
    </div>
    <p>Bài 8</p>
    <div style="display: flex;gap:20px;align-items: center;">
      <RouterLink to="/register" exact-active-class="active" class="nav">Register</RouterLink>
      <RouterLink to="/login" exact-active-class="active" class="nav">login</RouterLink>
    </div>
    <p>Bài 9</p>
    <RouterLink to="/users">List User</RouterLink>
    <p>Bài 10</p>
    <RouterLink to="/employees">List Employee</RouterLink>
    <p></p>
  </nav>
  <main>
    <RouterView />
  </main>
</div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router=useRouter();
const redirectPage=()=>{
    router.push('/contact');
}
</script>

<style>
.active{
  background-color: coral;
  color: white;
  border-radius: 5px;
  padding: 5px;
}
.nav{
  text-decoration: none;
}

</style>