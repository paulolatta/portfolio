import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  public items = [
    { title: 'AngularTS', subtitle: 'Frameworks Front-End TypeScript' },
    { title: 'TypeScript', subtitle: 'Superconjunto de JavaScript' },
    { title: 'Angular Material', subtitle: 'Componente Design para Angular' },
    {
      title: 'Bootstrap',
      subtitle: 'Kit de ferramentas de CSS para front-end',
    },
    { title: 'ChartJS', subtitle: 'Biblioteca de gráficos' },
  ];
}
