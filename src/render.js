import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    console.log("toogle dark mode click: ");
    const isDarkMode = await window.darkMode.toggle()
    console.log("toogle dark mode click", isDarkMode);
})

document.getElementById('toggle-dark-system').addEventListener('click', async () => {
    console.log("toogle dark mode click: ");
    const isDarkMode = await window.darkMode.system()
    console.log("toogle dark mode click", isDarkMode);
})

document.getElementById('open-shell-button').addEventListener('click',async ()=>{
    await window.shellCommand.open()
})