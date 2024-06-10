// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAQIkbejKgHmZEYw6fJRzraEzY7Ao6GOd4",
    authDomain: "sdastreamline.firebaseapp.com",
    projectId: "sdastreamline",
    storageBucket: "sdastreamline.appspot.com",
    messagingSenderId: "591535293839",
    appId: "1:591535293839:web:71b623248ffc15d72ef7fa"
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth(firebaseApp)

