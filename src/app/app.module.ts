import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AreaComponent } from './components/area-about/area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { IconComponent } from './components/icon/icon.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PortfolioComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    AreaComponent,
    PieChartComponent,
    LayoutComponent,
    CardComponent
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
    MatCardModule,
    IconComponent,
    NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
