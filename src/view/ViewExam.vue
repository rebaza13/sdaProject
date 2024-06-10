<!-- ExamTimetable.vue -->
<template>
    <div class="exam-timetable">
      <h2>Exam Timetable</h2>
      <div class="exams">
        <div v-for="exam in exams" :key="exam.id" class="exam">
          <h3>{{ exam.title }}</h3>
          <p><strong>Subject:</strong> {{ exam.subject }}</p>
          <p><strong>Duration:</strong> {{ exam.duration }} minutes</p>
          <button @click="getExam(exam.id)">Get Exam</button>
        </div>
      </div>
      <div v-if="selectedExam" class="exam-details">
        <h3>Exam Details</h3>
        <p><strong>Title:</strong> {{ selectedExam.title }}</p>
        <p><strong>Subject:</strong> {{ selectedExam.subject }}</p>
        <p><strong>Duration:</strong> {{ selectedExam.duration }} minutes</p>
        <button @click="startExam">Start Exam</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref,onMounted } from 'vue';
  import { getCollection } from '../controler/fireBaseMethods'; // Import Firebase method for fetching documents
  import { Exam } from '../model/Models'; // Import Exam interface
  import { useMainStore } from '@/store/MainStore';
  const exams = ref<Exam[]>([]);
  const selectedExam = ref<Exam | null>(null);
  const mainStore = useMainStore()
  // Fetch exams from Firestore on component mount
  onMounted(async () => {
    console.log(mainStore.user)
    try {
      exams.value = await getCollection('exams');
    } catch (error) {
      console.error('Error fetching exams:', error);
    }
  });
  
  function getExam(examId: string) {
    selectedExam.value = exams.value.find(exam => exam.id === examId) || null;
  }
  
  function startExam() {
    // Implement your logic to start the exam
    alert('Starting exam...');
  }
  </script>
  
  <style scoped>
  .exam-timetable {
    max-width: 800px;
    margin: auto;
  }
  
  .exams {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .exam {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .exam h3 {
    margin-top: 0;
  }
  
  .exam-details {
    margin-top: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  