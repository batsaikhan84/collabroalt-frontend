import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { NameFinderDirective } from './custom-directives/name-finder.directive';
import { NameSplitPipe } from './custom-pipes/name-split.pipe';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component'

@NgModule({
  declarations: [
    FormsModule,
    AppComponent,
    EmployeesComponent,
    NameFinderDirective,
    NameSplitPipe,
    PasswordGeneratorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
