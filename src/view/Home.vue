<script setup lang="ts">
import { RouterLink } from 'vue-router';
// You can add your TypeScript code here if needed
</script>

<template>
  <div>
    <header>
      Streamlined Online Examination System (SOES)
    </header>

    <nav>
      <a href="#home">Home</a>
      <a href="#register">Register</a>
      <a href="#login">Login</a>
      <a href="#about">About</a>
    </nav>

    <div class="container">
      <div class="action-card">
        <RouterLink :to="{name: 'create-exam'}"><h3>Create Exam</h3></RouterLink>
        <p>Teachers can create new exams</p>
      </div>
      <div class="action-card">
        <RouterLink :to="{name: 'view-exam'}"><h3>Manage Exam</h3></RouterLink>
        <p>Manage existing exams and questions</p>
      </div>
      <div class="action-card">
        <h3>Take Exam</h3>
        <p>Students can take assigned exams</p>
      </div>
      <div class="action-card">
        <h3>Check Exam</h3>
        <p>Teachers can review and grade exams</p>
      </div>
      <div class="action-card">
        <h3>View Grade</h3>
        <p>Students can view their grades</p>
      </div>
      <div class="action-card">
        <h3>Feedback</h3>
        <p>Provide feedback on exams</p>
      </div>
      <div class="action-card">
        <h3>Update Exam Status</h3>
        <p>Administrators can update the status of exams</p>
      </div>
    </div>

    <footer>
      &copy; 2024 SOES. All rights reserved.
    </footer>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}
header {
  background-color: #4CAF50;
  color: white;
  padding: 1rem 0;
  text-align: center;
  font-size: 1.5rem;
}
nav {
  display: flex;
  justify-content: center;
  background-color: #333;
}
nav a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}
nav a:hover {
  background-color: #ddd;
  color: black;
}
.container {
  padding: 20px;
  text-align: center;
}
.action-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  display: inline-block;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.action-card h3 {
  font-size: 1.2rem;
  color: #333;
}
.action-card p {
  color: #666;
}
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
