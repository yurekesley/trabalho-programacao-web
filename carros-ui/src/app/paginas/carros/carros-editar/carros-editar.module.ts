import { CarrosEditarRoutingModule } from './carros-editar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosEditarComponent } from './carros-editar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [CarrosEditarComponent],
  imports: [
    CommonModule
    , RouterModule
    , ReactiveFormsModule
    , RouterModule
    , MatCardModule
    , MatDatepickerModule
    , MatButtonModule
    , MatInputModule
    , MatFormFieldModule
    , CarrosEditarRoutingModule
  ]
})
export class CarrosEditarModule { }
