import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrosNovoComponent } from './carros-novo.component';

const routes: Routes = [
  {
    path: '',
    component: CarrosNovoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosNovoRoutingModule { }
