import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './componets/pages/heroes/heroes.component'; 
import { HeroDetailComponent } from './componets/organisms/hero-detail/hero-detail.component';
import { MessagesComponent } from './componets/molecules/messages/messages.component';
import { DashboardComponent } from './componets/pages/dashboard/dashboard.component';
import { HeroSearchComponent } from './componets/organisms/hero-search/hero-search.component';
import { ButtonComponent } from './componets/atoms/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { H1Component } from './componets/atoms/h1/h1.component';
import { SearchComponent } from './componets/atoms/search/search.component';
import { H2Component } from './componets/atoms/h2/h2.component';
import { LabelComponent } from './componets/atoms/label/label.component';
import { AComponent } from './componets/atoms/a/a.component';
import { HeaderComponent } from './componets/organisms/header/header.component';
import { NavComponent } from './componets/molecules/nav/nav.component';
import { BodyComponent } from './componets/tamplates/body/body.component';
import { TopHeroComponent } from './componets/molecules/top-hero/top-hero.component';
import {MatCardModule} from '@angular/material/card';



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
    MatCardModule
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
    BodyComponent,
    TopHeroComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

