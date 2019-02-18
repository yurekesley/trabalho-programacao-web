import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MdbModulo } from 'mdias-componentes';

import {environment as env} from './../environments/environment'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModulo.forRoot(env)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
