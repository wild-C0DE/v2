const { app, BrowserWindow, Menu, dialog } = require("electron");
const url = require("url");
const path = require("path");


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 750,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: __dirname + `/icontry.png`,
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  const menu = Menu.buildFromTemplate([
    {
      label: "Menu",
      submenu: [
        { role : "togglefullscreen" },
        
        { role : "quit" },

      ],
    },
   
  ]);
  Menu.setApplicationMenu(menu);
}

let saveFile = function () {
  dialog.showSaveDialog({
    title: "Save file - Electron example",
    defaultPath: "C:\\test.pdf",
    buttonLabel: "Save Electron File",
    filters: [
      {
        name: "Adobe PDF",
        extensions: ["pdf"],
      },
    ],
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});

