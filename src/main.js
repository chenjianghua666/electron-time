const { app, BrowserWindow, ipcMain, nativeTheme, globalShortcut } = require('electron');
const path = require('node:path');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: { //  定义标题栏的颜色
      color: 'rgba(255,255,0,0)', // 背景色
      height: 35,
      symbolColor: 'black'
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      autofill: {
        enabled: true,
        // ...其他自动填充配置...
      },
    },
  
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    console.log(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })
  
  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })


  ipcMain.on('shell:open', () => {
    const pageDirectory = __dirname.replace('app.asar', 'app.asar.unpacked')
    const pagePath = path.join('file://', pageDirectory, 'index.html')
    shell.openExternal(pagePath)
  })

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

const win = new BrowserWindow()

win.loadURL('https://nodejs.org/api/events.html#events_class_eventemitter')

win.webContents.on('did-finish-load', async () => {
  win.webContents.savePage('/tmp/test.html', 'HTMLComplete').then(() => {
    console.log('Page was saved successfully.')
  }).catch(err => {
    console.log(err)
  })
})
};


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  
  // createWindow();
  // const ret = globalShortcut.register('CommandOrControl+X', () => {
  //   console.log('CommandOrControl+X is pressed')
  // })

  // if (!ret) {
  //   console.log('registration failed')
  // }

  // // 检查快捷键是否注册成功
  // console.log("======>",globalShortcut.isRegistered('CommandOrControl+X'))

  
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
});
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
