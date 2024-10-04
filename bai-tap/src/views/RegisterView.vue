<template>
   <div>
    <v-card class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg">
        <v-card-item>
            <div style="text-align: center;font-size: 20px;font-weight: 600;">Create Account</div>
            <v-card-text>
                <div class="text-subtitle-1 text-medium-emphasis">Your Email</div>

      <v-text-field
        v-model="user.email"
        type="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>
      <!-- Notify email -->
      <div style="color: red;font-size: 12px;" v-if="notifyEmail">{{ errorEmail }}</div>
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
         v-model="user.password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <!-- Notify Password -->
      <div style="color: red;font-size: 12px;" v-if="notifyPassword">{{ errorPassword }}</div>
      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Confirm Password
      </div>

      <v-text-field
        v-model="user.rePassword"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <!-- Notify Repassword -->
      <div style="color: red;font-size: 12px;" v-if="notifyRepassword">{{ errorRepassword }}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="signup" color="primary" variant="flat" block="" text>Sign Up</v-btn>
            </v-card-actions>
            <div style="font-size: smaller;text-align: center;"><span>Already have an account?</span><span style="font-weight: 600;">Login here</span></div>
        </v-card-item>
        <v-alert v-if="register"
    title="Register successfully"
    type="success"
  ></v-alert>
    </v-card>
    <v-dialog max-width="500" v-if="isActive">
        <v-card title="Dialog">
            <v-card-text>
            Bạn đã đăng ký thành công! Chuyển hướng trang đăng nhập.
            </v-card-text>
        </v-card>
    </v-dialog>
   </div>
</template>

<script setup>
import { onMounted, reactive, ref, shallowRef } from "vue";
import { useRouter } from "vue-router";
const isActive=shallowRef(false)
const router=useRouter();
const users=reactive([]);
const errorEmail=ref('');
const errorPassword=ref('');
const errorRepassword=ref('');
const notifyEmail=ref(false);
const notifyPassword=ref(false);
const notifyRepassword=ref(false);
const register=ref(false);
const user=reactive({
    id:'',
    email:'',
    password:'',
    rePassword:''
})
//get list from local
onMounted(()=>{
    const data=JSON.parse(localStorage.getItem('users')||'[]');
    if(data.length>0){
        users.push(...data);
    }
})
//validate email
function validateEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
//validate password
function validatePassword(password) {
    // Biểu thức chính quy để kiểm tra mật khẩu
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordPattern.test(password);
}
const signup=()=>{
   //email empty
   if(!user.email.trim()){
    errorEmail.value='Email is required';
    notifyEmail.value=true;
    return;
   }
   //email not valid
   if(!validateEmail(user.email)){
    errorEmail.value='Invalid email format';
    notifyEmail.value=true;
    return;
   }
   //email has already registered
   if(users.find(u=>u.email==user.email.trim())){
       errorEmail.value='Email already registered';
       notifyEmail.value=true;
       return;
   }
   //password empty
   if(!user.password.trim()){
    errorPassword.value='Password is required';
    notifyPassword.value=true;
    return;
   }
   //password not valid
   if(!validatePassword(user.password)){
    errorPassword.value='Password must contain at least 6 characters, including uppercase and lowercase letters and numbers';
    notifyPassword.value=true;
    return;
   }
   //rePassword empty
   if(!user.rePassword.trim()){
    errorRepassword.value='Confirm password is required';
    notifyRepassword.value=true;
    return;
   }
   //rePassword not match
   if(user.password!==user.rePassword){
    errorRepassword.value='Passwords do not match';
    notifyRepassword.value=true;
    return;
   }
   //signup success
   const newUser={
    id: Date.now().toString(),
    email:user.email,
    password:user.password
   }
   users.push(newUser);
   localStorage.setItem('users',JSON.stringify(users));
   setTimeout(()=>{
      isActive.value=true;
      router.push('/login');
   },[3000])
  
}
</script>

<style>

</style>