const { BrowserWindow, ipcMain, app } = require("electron");
const path = require('path')

function createWindow() {
    console.log('this is debug message!');
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

    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
      } else {
        console.log(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
        mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
      }
    
    // mainWindow.loadFile('/src/process/01/index.html');
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