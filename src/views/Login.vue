<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Ingrese email" v-model="email">
        <input type="password" placeholder="Ingrese contraseña" v-model="password">
        <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
      </form>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { useUserStore } from '../stores/user';
    import { useRouter } from 'vue-router';
    
    const email = ref('');
    const password = ref('');
    
    const userStore = useUserStore();
    const router = useRouter();
    
        const handleSubmit = async () => {
            if (!email.value || password.value.length < 6) {
            return alert('llena los campos');
            }
        
            await userStore.loginUser(email.value, password.value)
            router.push('/');
        };
  </script>
  