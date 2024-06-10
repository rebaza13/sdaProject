import { defineStore } from "pinia";
import {  ref } from "vue";
export const useMainStore = defineStore('mainStore',()=>{
    const user = ref(window.localStorage.getItem("#user")?JSON.parse(window.localStorage.getItem("#user")):null)
    // const userString = window.localStorage.getItem('#user');
    // const user = userString ? JSON.parse(userString) : null;

    

        return {user}
})