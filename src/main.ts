import { app, BrowserWindow, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import * as path from 'path';
import isDev from 'electron-is-dev';

let mainWindow: BrowserWindow | null = null;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Path to your preload file
    },
  });

  // Load the Angular app
  const url = isDev
    ? 'http://localhost:4200'
    : `file://${path.join(__dirname, '/dist/index.html')}`;
  mainWindow.loadURL(url);

  // Open the DevTools
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();

  // Check for updates
  if (!isDev) {
    autoUpdater.checkForUpdatesAndNotify();
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Auto-updater events
autoUpdater.on('checking-for-update', () => {
  console.log('Checking for updates...');
});

autoUpdater.on('update-available', (info) => {
  console.log('Update available:', info);

  // Show a notification to the user
  const notification = new Notification('Update available', {
    body: `Update available: ${info.version}`,
    icon: path.join(__dirname, 'assets/icon.png'),
  })

  notification.onclick = () => {
    console.log('Notification clicked');
  }
  if (mainWindow) {
    mainWindow.webContents.send('update_available', info);
  }
});

autoUpdater.on('update-not-available', () => {
  console.log('No updates available');
});

autoUpdater.on('error', (err) => {
  console.error('Error during update check:', err);
});

autoUpdater.on('download-progress', (progressObj) => {
  console.log(`Download progress: ${progressObj.percent}%`);
});

autoUpdater.on('update-downloaded', (info) => {
  console.log('Update downloaded:', info);
  if (mainWindow) {
    mainWindow.webContents.send('update_downloaded', info);
  }

  // Install and quit
  autoUpdater.quitAndInstall();
});

// IPC events
ipcMain.on('install-update', () => {
  autoUpdater.quitAndInstall();
});
