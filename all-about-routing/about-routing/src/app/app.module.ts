import { HomeModule } from './components/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './components/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
