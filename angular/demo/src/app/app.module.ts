import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { NameFinderDirective } from './custom-directives/name-finder.directive';
import { NameSplitPipe } from './customp-pips/name-split.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NameFinderDirective,
    NameSplitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
