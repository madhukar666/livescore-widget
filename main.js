const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 300,
        show: "false",
        title: "Live Score",
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
    win.loadURL("http://localhost:3000")
}
app.whenReady().then(() => {
    createWindow()
})