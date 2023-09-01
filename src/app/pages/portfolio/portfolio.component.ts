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

  public obs = [
    {icon: 'looks_one', text: 'O Netlify foi utilizado para a hospedagem do repositório do Portfólio.'},
    {icon: 'looks_two', text: 'O Portfólio está totalmente responsivo para web e mobile.'},
    {icon: 'looks_3', text: 'Última atualização: 01/09/2023'},
    {icon: 'looks_4', text: 'O repositório do Portfólio pode ser visualizado/baixado através do link: '}
  ]
}
