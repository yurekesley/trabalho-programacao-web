import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosNovoRoutingModule } from './carros-novo-routing.module';
import { CarrosNovoComponent } from './carros-novo.component';

@NgModule({
  declarations: [CarrosNovoComponent],
  imports: [
    CommonModule,
    CarrosNovoRoutingModule
  ]
})
export class CarrosNovoModule { }
