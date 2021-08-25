const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 700,
        height:400,
        resizible: false,
        autoHideMenuBar: true

    });
    mainWindow.loadURL(`File://${__dirname}/index.html`)
})