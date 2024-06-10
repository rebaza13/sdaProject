<template>
  <div class="container">
    <div class="form-wrapper">
      <!-- <img src="/images/undraw_secure_login_pdn4.png" alt="Login" class="image"> -->
      <h2 class="title">Login to Diet Coach</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email" class="form-label">Email Address</label>
          <input id="email" type="email" v-model="email" class="form-input">
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input id="password" type="password" v-model="password" class="form-input">
        </div>
        <div class="form-actions">
          <button type="submit" class="btn">Login</button>
          <router-link to="/register" class="link">Create an account</router-link>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { loginUser } from '../controler/fireBaseMethods';
import { RouterLink, useRouter } from 'vue-router';

const email = ref('');
const password = ref('');

const router = useRouter();

const login = async () => {
  try {
    await loginUser(email.value, password.value);
    router.push({ name: 'home' });
    console.log('Login successful');
  } catch (error: any) {
    alert(error.message);
    console.error('Error during login:', error);
  }
};
</script>


<style>
body {
  font-family: 'Inter', sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #3b82f6, #10b981);
  overflow-y: auto;
}

.form-wrapper {
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  outline: none;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  background-color: #1f2937;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #3b82f6;
}

.link {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1f2937;
  text-decoration: none;
  transition: color 0.3s ease;
}

.link:hover {
  color: #3b82f6;
}
</style>
