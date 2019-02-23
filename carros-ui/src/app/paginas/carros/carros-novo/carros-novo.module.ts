import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosNovoRoutingModule } from './carros-novo-routing.module';
import { CarrosNovoComponent } from './carros-novo.component';
import { MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [CarrosNovoComponent],
  imports: [
      CommonModule
    , ReactiveFormsModule
    , RouterModule
    , MatCardModule
    , MatDatepickerModule
    , MatButtonModule
    , MatInputModule
    , MatFormFieldModule
    , CarrosNovoRoutingModule
  ]
})
export class CarrosNovoModule { }
