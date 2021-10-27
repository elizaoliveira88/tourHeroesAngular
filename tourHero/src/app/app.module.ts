import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './componets/atoms/a/a.component';
import { ButtonComponent } from './componets/atoms/button/button.component';
import { H1Component } from './componets/atoms/h1/h1.component';
import { H2Component } from './componets/atoms/h2/h2.component';
import { H3Component } from './componets/atoms/h3/h3.component';
import { LabelComponent } from './componets/atoms/label/label.component';
import { SearchComponent } from './componets/atoms/search/search.component';
import { MessagesComponent } from './componets/molecules/messages/messages.component';
import { NavComponent } from './componets/molecules/nav/nav.component';
import { TopHeroComponent } from './componets/molecules/top-hero/top-hero.component';
import { HeaderComponent } from './componets/organisms/header/header.component';
import { HeroDetailComponent } from './componets/organisms/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './componets/organisms/hero-search/hero-search.component';
import { HeroesComponent } from './componets/pages/heroes/heroes.component';
import { DashboardComponent } from './componets/templates/dashboard/dashboard.component';
import { InMemoryDataService } from './services/in-memory-data.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    ButtonComponent,
    H1Component,
    SearchComponent,
    H2Component,
    LabelComponent,
    AComponent,
    HeaderComponent,
    NavComponent,
    TopHeroComponent,
    H3Component,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

