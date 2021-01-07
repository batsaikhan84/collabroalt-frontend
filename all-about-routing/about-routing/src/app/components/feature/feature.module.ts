import { FeatureComponent } from './feature.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [PricingComponent, FeatureComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
