<template>
    <div class="container">
    <div class="header-title">
      Hello 
    </div>
    </div>
    <button @click="changeTitle">change title</button>
    <button @click="changeTheme" id="toggle-dark-mode"> change dark theme</button>
    <button @click="changeSystemTheme" id="toggle-dark-system"> change system theme</button>
    <button id="open-shell-button"> change system theme</button>
  </template>
  
  <script setup>
import { ref } from 'vue';
  const title = ref("name");
  const changeTitle = () => {
    title.value = "Changed Name";
  }

  const changeTheme = async () => {
  }

  const changeSystemTheme = async () => {
    // const isDarkMode = await window.darkModel.system();
  }
  console.log('👋 This message is being logged by "App.vue", included via Vite');
  </script>

  <style scoped>
    .container {
      display: flex;
      flex-direction: row;
    }
  </style>