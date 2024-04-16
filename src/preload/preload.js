const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('fileApi',{
    openFile: () => ipcRenderer.send('dialog:fileOpen')
})