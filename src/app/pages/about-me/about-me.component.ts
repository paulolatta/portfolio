import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public items = [
    'Graduação em Ciência da Computação pelo Instituto de Ensino Superior da Grande Florianópolis (IESGF - UNIP);',
    'Desenvolvedor Front-End à 5 anos;',
    'Experiência com os frameworks Angular e React;',
    'Estudando Java Spring Boot com o intuito de ser Full Stack, e inglês por entender ser essencial para um desenvolvedor;',
  ];

  constructor() {}

  curriculo(): void {
    window.open(
      '/assets/images/curriculo-paulo-gustavo.pdf',
      '_blank'
    );
  }
}
