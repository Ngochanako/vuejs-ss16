<template>
    <div>
     <v-card class="mx-auto pa-12 pb-8"
       elevation="8"
       max-width="448"
       rounded="lg">
         <v-card-item>
             <div style="text-align: center;font-size: 20px;font-weight: 600;">Login Account</div>
             <v-card-text>
                 <div class="text-subtitle-1 text-medium-emphasis">Your Email</div>
 
       <v-text-field
         density="compact"
         placeholder="Email address"
         prepend-inner-icon="mdi-email-outline"
         variant="outlined"
         v-model="user.email"
       ></v-text-field>
       
       <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
         Password
 
         <a
           class="text-caption text-decoration-none text-blue"
           href="#"
           rel="noopener noreferrer"
           target="_blank"
         >
           Forgot login password?</a>
       </div>
 
       <v-text-field
         :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
         :type="visible ? 'text' : 'password'"
         density="compact"
         placeholder="Enter your password"
         prepend-inner-icon="mdi-lock-outline"
         variant="outlined"
         @click:append-inner="visible = !visible"
         v-model="user.password"
       ></v-text-field>
        <div v-if="error" style="color: red;font-size: 12px;">Email hoặc mật khẩu không chính xác</div>
             </v-card-text>
             <v-card-actions>
                 <v-btn @click="login" color="primary" variant="flat" block="" text>Sign In</v-btn>
             </v-card-actions>
             <div style="font-size: smaller;text-align: center;"><span>Already have an account?</span><span style="font-weight: 600;">Register here</span></div>
         </v-card-item>
     </v-card>
    </div>
 </template>
 
 <script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router=useRouter();
const users=reactive([]);
 const error=ref(false);
 const user=reactive({
    email:'',
    password:''
 })
 //get list from local
onMounted(()=>{
    const data=JSON.parse(localStorage.getItem('users')||'[]');
    if(data.length>0){
        users.push(...data);
    }
})
const login=()=>{
    console.log(user);
    
    // API call to login
   if(users.find(u=>u.email==user.email&&u.password==user.password)){
      router.push('/');
      localStorage.setItem('user',JSON.stringify(user));
   }else{
      error.value=true;
   }
}
 </script>
 
 <style>
 
 </style>