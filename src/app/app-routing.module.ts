import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Início',
    },
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: {
      title: 'Sobre mim',
    },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      title: 'Portfolio',
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projetos',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contato',
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
