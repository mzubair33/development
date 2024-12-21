// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ElectronService } from './shared/electron-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  updateAvailable: boolean = false;

  constructor(private electronService: ElectronService) { }

  ngOnInit(): void {
    this.electronService.onUpdateAvailable((info) => {
      console.log('Update available:', info);
      this.updateAvailable = true;
    });

    this.electronService.onUpdateDownloaded((info) => {
      console.log('Update downloaded:', info);
      this.updateAvailable = false;
    });
  }

  installUpdate(): void {
    this.electronService.installUpdate();
  }
}
