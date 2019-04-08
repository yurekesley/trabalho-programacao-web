import { CarrosEditarComponent } from './carros-editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroResolver } from 'src/app/resolvers/carro.resolver';

const routes: Routes = [
  {
    path: '',
    component: CarrosEditarComponent,
    resolve: {
      carro: CarroResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosEditarRoutingModule { }
