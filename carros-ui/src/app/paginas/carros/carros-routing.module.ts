import { CarrosComponent } from './carros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CarrosComponent
  },
  {
    path: 'novo',
    loadChildren: './carros-novo/carros-novo.module#CarrosNovoModule'
  },
  {
    path: ':id/editar',
    loadChildren: './carros-editar/carros-editar.module#CarrosEditarModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
