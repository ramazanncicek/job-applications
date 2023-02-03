const { app, BrowserWindow,Menu,ipcMain, ipcRenderer,dialog } = require('electron');
const path = require('path');
let mainWindow;
function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1500,
        height: 900,
        // titleBarStyle: 'hidden',
        // titleBarOverlay: true,
        autoHideMenuBar: true,
        resizable: true,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
          nodeIntegration: true,
          contextIsolation: false
        }
      });
    mainWindow.loadURL("http://localhost:3000")
}
app.whenReady().then(() => {
    createMainWindow();
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
            })
})
app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
app.quit()
}
})