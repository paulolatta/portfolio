import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './pages/contact/contact.component';
import { EmailComponent } from './components/icons/email/email.component';
import { GithubComponent } from './components/icons/github/github.component';
import { HomeComponent } from './pages/home/home.component';
import { InstagramComponent } from './components/icons/instagram/instagram.component';
import { LinkedinComponent } from './components/icons/linkedin/linkedin.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PortfolioComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    LinkedinComponent,
    GithubComponent,
    InstagramComponent,
    EmailComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
