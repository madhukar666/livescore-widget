const { app, BrowserWindow } = require('electron')
const { systemPreferences } = require('electron/main')
const AutoLaunch = require('auto-launch');

// Create an instance for your app
const myAppAutoLauncher = new AutoLaunch({
    name: 'My Electron App',
    isHidden: true,           // Optional: make it hidden (no tray icon)
    path: process.execPath    // Path to the app's executable
});

// Enable auto-launch
myAppAutoLauncher.enable()
    .then(() => {
        console.log('App set to start on boot!');
    })
    .catch((err) => {
        console.error('Error setting app to start on boot:', err);
    });

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 300,
        show: "false",
        title: "My App",
        resizable: false, // Disable resizing
        fullscreenable: "false",
        skipTaskbar: "false",
        closable: "false",
        frames: "false",
        // systemPreferences: "false",
        webPreferences: {
            nodeIntegration: true,
        }
    })
    win.once('ready-to-show', () => {
        win.show()
    })
    // win.loadURL('https://github.com')
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})