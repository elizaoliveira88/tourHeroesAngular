import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './componets/heroes/heroes.component';
import { HeroDetailComponent } from './componets/hero-detail/hero-detail.component';
import { MessagesComponent } from './componets/messages/messages.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { HeroSearchComponent } from './componets/hero-search/hero-search.component';
import { ButtonComponent } from './componets/atoms/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { H1Component } from './componets/atoms/h1/h1.component';
import { SearchComponent } from './componets/atoms/search/search.component';
import { H2Component } from './componets/atoms/h2/h2.component';
import { LabelComponent } from './componets/atoms/label/label.component';
import { InputComponent } from './componets/atoms/input/input.component';


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
    InputComponent,
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

