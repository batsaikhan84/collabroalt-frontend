import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNgmodelComponent } from './component/app-ngmodel/app-ngmodel.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './component/component/employee-list/employee-list.component';
import { NgDirectivesComponent } from './component/component/ng-directives/ng-directives.component'

@NgModule({
  declarations: [
    AppComponent,
    AppNgmodelComponent,
    EmployeeListComponent,
    NgDirectivesComponent
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
