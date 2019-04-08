import { CarrosService } from './../paginas/carros/carros.service';
import { Carro } from 'src/app/model/carro';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CarroResolver implements Resolve<Observable<Carro>> {
  constructor(private carroService: CarrosService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<Carro> {
    const id = route.paramMap.get('id');
    return this.carroService.getByID(Number(id));
  }

}
