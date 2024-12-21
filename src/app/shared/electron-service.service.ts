import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  private ipcRenderer: any;

  constructor() {
    this.ipcRenderer = window.require('electron').ipcRenderer;
  }

  onUpdateAvailable(callback: (info: any) => void): void {
    this.ipcRenderer.on('update_available', callback);
  }

  onUpdateDownloaded(callback: (info: any) => void): void {
    this.ipcRenderer.on('update_downloaded', callback);
  }

  installUpdate(): void {
    this.ipcRenderer.send('install-update');
  }
}
