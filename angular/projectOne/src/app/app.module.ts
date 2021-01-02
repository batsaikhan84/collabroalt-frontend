import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RandomPicturesComponent } from './components/random-pictures/random-pictures.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    NavbarComponent,
    RandomPicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
