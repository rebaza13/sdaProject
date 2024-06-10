<!-- AddExam.vue -->
<template>
  <div class="add-exam">
    <h2>Add Exam</h2>
    <form @submit.prevent="addExam">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="exam.title" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="exam.subject" required>
      </div>
      <div class="form-group">
        <label for="duration">Duration (minutes):</label>
        <input type="number" id="duration" v-model.number="exam.duration" required>
      </div>
      <button type="submit">Add Exam</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { setDocumentWithRandomId } from '@/controler/fireBaseMethods'; // Import Firebase method for adding documents
import { Exam } from '@/model/Models'; // Import Exam interface

const exam = ref<Exam>({
  title: '',
  subject: '',
  duration: 0
});

async function addExam() {
  try {
    await setDocumentWithRandomId('exams', exam.value); // Add exam document to Firestore
    alert('Exam added successfully!');
    // Clear form fields after adding exam
    exam.value.title = '';
    exam.value.subject = '';
    exam.value.duration = 0;
  } catch (error) {
    console.error('Error adding exam:', error);
    alert('Failed to add exam. Please try again later.');
  }
}
</script>

<style scoped>
.add-exam {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
