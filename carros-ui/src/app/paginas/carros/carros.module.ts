import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosComponent } from './carros.component';
import { CarrosService } from './carros.service';
import { TabelaModule } from 'src/app/componentes/tabela/tabela.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    CarrosComponent
  ],
  imports: [
      CommonModule
    , TabelaModule
    , CarrosRoutingModule
    , MatMenuModule
    , MatIconModule
    , MatButtonModule
  ], providers: [
    CarrosService
  ]
})
export class CarrosModule { }
