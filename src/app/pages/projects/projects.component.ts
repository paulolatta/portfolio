import { Component } from '@angular/core';
import { card } from 'src/app/services/card.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public items: card[] = [
    {
      title: 'google-auth-firebase',
      text: 'Um projeto de autenticação simples usando o firebase como Back-End',
      update: 'Última atualização: 11/08/2022',
      src: '../../assets/images/google-auth-firebase.png',
      link: 'https://github.com/paulolatta/google-auth-firebase'
    },
    {
      title: 'clone-interface-discord-react',
      text: 'Interface do discord desenvolvido com o ReactJS ',
      update: 'Última atualização: 05/08/2022',
      src: '../../assets/images/clone-interface-discord-react.png',
      link: 'https://github.com/paulolatta/clone-interface-discord-react'
    },
    {
      title: 'clone-interface-twitter-react',
      text: 'Interface do Twitter desenvolvido com o ReactJS',
      update: 'Última atualização: 04/08/2022',
      src: '../../assets/images/clone-interface-twitter-react.png',
      link: 'https://github.com/paulolatta/clone-interface-twitter-react'
    },
    {
      title: 'crud-angular',
      text: 'Um simples projeto de CRUD usando Angular',
      update: 'Última atualização: 03/03/2022',
      src: '../../assets/images/crud-angular.png',
      link: 'https://github.com/paulolatta/crud-angular'

    },
    {
      title: 'angular-paises',
      text: 'Um simples projeto listando países usando Angular',
      update: 'Última atualização: 10/02/2022',
      src: '../../assets/images/angular-paises.png',
      link: 'https://github.com/paulolatta/angular-paises'
    },
    {
      title: 'crud-react-mysql ',
      text: 'Um simples projeto de CRUD usando React para faculdade',
      update: 'Última atualização: 22/10/2021',
      src: '../../assets/images/crud-react-mysql.png',
      link: 'https://github.com/paulolatta/crud-react-mysql'
    },
    {
      title: 'sunset-sacolas',
      text: 'Um simples site de uma empresa de personalização de sacolas, em desenvolvimento.',
      update: 'Última atualização: 08/08/2022',
      src: '../../assets/images/em-desenvolvimento.png',
      link: 'https://github.com/paulolatta/sunset-sacolas'
    },
    {
      title: 'serve-lar-website',
      text: 'Um simples site de uma empresa de serviços elétricos, em desenvolvimento.',
      update: 'Última atualização: 08/03/2023',
      src: '../../assets/images/em-desenvolvimento.png',
      link: 'https://github.com/paulolatta/serve-lar-website'
    },
  ];
}
