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
import { ButtonsComponent } from './componets/atoms/buttons/buttons.component';
import { InputComponent } from './componets/atoms/input/input.component';
import { TitleComponent } from './componets/atoms/title/title.component';
import { MessagesComponent } from './componets/molecules/messages/messages.component';
import { NavComponent } from './componets/molecules/nav/nav.component';
import { TopHeroComponent } from './componets/molecules/top-hero/top-hero.component';
import { HeaderComponent } from './componets/organisms/header/header.component';
import { HeroDetailComponent } from './componets/organisms/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './componets/organisms/hero-search/hero-search.component';
import { HeroesComponent } from './componets/pages/heroes/heroes.component';
import { DashboardComponent } from './componets/templates/dashboard/dashboard.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TextComponent } from './componets/atoms/text/text.component';



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
    HeaderComponent,
    NavComponent,
    TopHeroComponent,
    TitleComponent,
    ButtonsComponent,
    InputComponent,
    TextComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

