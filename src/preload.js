// See the Electron documentation for details on how to use preload scripts:

const { contextBridge, ipcRenderer } = require("electron");

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('shellCommand', {
    open: ()=> ipcRenderer.send('shell:open')
})