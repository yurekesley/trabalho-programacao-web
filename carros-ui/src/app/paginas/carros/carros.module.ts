import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosComponent } from './carros.component';
import { CarrosService } from './carros.service';

@NgModule({
  declarations: [
    CarrosComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule
  ], providers: [
    CarrosService
  ]
})
export class CarrosModule { }
