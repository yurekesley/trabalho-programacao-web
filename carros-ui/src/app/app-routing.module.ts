import { NgModule, Inject } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment as env } from 'src/environments/environment';

const routes: Routes = [
  {
    path: 'carros',
    loadChildren: './paginas/carros/carros.module#CarrosModule'
  },
  { path: '**', redirectTo: env.ROTA_INICIO, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
