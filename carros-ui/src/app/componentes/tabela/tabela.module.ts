import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela.component';
import { MatTableModule } from '@angular/material';
import { ColunaComponent } from './coluna/coluna.component';

@NgModule({
  declarations: [
    TabelaComponent,
    ColunaComponent
  ],
  imports: [
      CommonModule
   ,  MatTableModule
  ], exports: [
      TabelaComponent
    , ColunaComponent
  ]
})
export class TabelaModule { }
