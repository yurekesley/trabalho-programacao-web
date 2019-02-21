import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule
       , CUSTOM_ELEMENTS_SCHEMA
       , ModuleWithProviders } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatButtonModule,
MatCardModule, MatFormFieldModule, MatInputModule,
MatSelectModule, MatTableModule, MatPaginatorModule,
MatSortModule, MatDialogModule, MatDatepickerModule,
MatMenuModule, MatTabsModule, MatAutocompleteModule,
MatCheckboxModule, MatNativeDateModule,
MatTooltipModule,
MAT_DATE_LOCALE } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { URL_SERVIDOR, ROTA_INICIO, NOME_SISTEMA } from './providers';

export interface IEnvironment {
  production: boolean;
  NOME_SISTEMA: string;
  ROTA_INICIO: string;
  URL_SERVIDOR: string;
  I18N: string;
}

const modulos = [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMenuModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatNativeDateModule,
];

@NgModule({
  imports: [ modulos ],
  exports: [ modulos ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule {

  static forRoot(env: IEnvironment): ModuleWithProviders {
    return {
      ngModule: MainModule,
        providers: [
        {
          provide: MAT_DATE_LOCALE,
          useValue: 'pt-BR'
        },
        { provide: NOME_SISTEMA, useValue: env.NOME_SISTEMA },
        { provide: ROTA_INICIO, useValue: env.ROTA_INICIO},
        { provide: URL_SERVIDOR, useValue: env.URL_SERVIDOR },
      ]
    };
  }
}
