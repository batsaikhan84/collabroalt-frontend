import { FeatureComponent } from './../feature/feature.component';
import { FeatureModule } from './../feature/feature.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, FeatureComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FeatureModule
  ]
})
export class HomeModule { }
