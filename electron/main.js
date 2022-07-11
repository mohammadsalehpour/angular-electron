const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/source/assets/images/damedast.png',
    darkTheme: true,
    backgroundColor: "#00000",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // mainWindow.loadFile('index.html');
  // mainWindow.loadURL("https://www.google.com");
  // mainWindow.loadURL("http://erp.takrosystem.ir/");
  mainWindow.loadURL(__dirname + "/source/index.html");
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
