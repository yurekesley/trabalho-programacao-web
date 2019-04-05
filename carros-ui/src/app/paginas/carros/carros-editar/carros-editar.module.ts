import { CarrosEditarRoutingModule } from './carros-editar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosEditarComponent } from './carros-editar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarrosEditarComponent],
  imports: [
    CommonModule
    , RouterModule
    , CarrosEditarRoutingModule
  ]
})
export class CarrosEditarModule { }
