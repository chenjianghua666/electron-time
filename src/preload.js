// See the Electron documentation for details on how to use preload scripts:

const { contextBridge, ipcRenderer } = require("electron");
import "./preload/preload"

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('shellCommand', {
    open: ()=> ipcRenderer.send('shell:open')
})


// contextBridge.exposeInMainWorld('fileApi',{
//     fileOpen: () => ipcRenderer.send('dialog:fileOpen')
// })