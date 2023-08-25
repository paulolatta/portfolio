import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  aboutMe(): void {
    this.router.navigate(['about-me']);
  }

  goToLinkedin(): void {
    window.open(
      'https://www.linkedin.com/in/paulo-gustavo-latta-082485179/',
      '_blank'
    );
  }

  goToGithub(): void {
    window.open('https://github.com/paulolatta', '_blank');
  }

  goToEmail(): void {
    window.open('mailto:paulogn.lata@gamil.com', '_blank');
  }

  goToInstagram(): void {
    window.open('https://www.instagram.com/gustavo.latta/', '_blank');
  }
}
