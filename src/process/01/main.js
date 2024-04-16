const { BrowserWindow, ipcMain, app } = require("electron");
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    ipcMain.on('set-title', (e, title) => {
        const webContents = e.sender;
        const win = BrowserWindow.fromWebContents(webContents,mnnu         
        );
        win.setTitle(title);
    });
    mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate',() =>{
        console.log('activate okay!');
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})

app.on("window-all-closed", () => {
    if (process.platform === 'darwin') app.quit();
})