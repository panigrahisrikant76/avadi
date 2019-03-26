import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackomojoRoutingModule } from './trackomojo-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    TrackomojoRoutingModule
  ]
})
export class TrackomojoModule { }
