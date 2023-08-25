import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(public router: Router) {}

  home(): void {
    this.router.navigate(['']);
  }

  aboutMe(): void {
    this.router.navigate(['about-me']);
  }

  portfolio(): void {
    this.router.navigate(['portfolio']);
  }

  projects(): void {
    this.router.navigate(['projects']);
  }

  contact(): void {
    this.router.navigate(['contact']);
  }
}
