import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highlight',
  templateUrl: './app-highlight.component.html',
  styleUrls: ['./app-highlight.component.css']
})
export class AppHighLightComponent implements OnInit {

  constructor(private router: Router) { } // Router is Injected

  ngOnInit(): void {
  }
  showForm() {
    this.router.navigate(['/register-form']); // navigate to /register-form
  }
}