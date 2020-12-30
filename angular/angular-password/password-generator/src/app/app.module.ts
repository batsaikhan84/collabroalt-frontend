import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TemperatureConversionPipe } from './components/customPipe/temperature-conversion.pipe';
import { PrefixPipe } from './components/customPipe/prefixPipe/prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    PipesComponent,
    TemperatureConversionPipe,
    PrefixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
