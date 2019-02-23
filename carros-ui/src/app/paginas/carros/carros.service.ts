import { Carro } from './../../model/carro';
import { HttpService } from './../../services/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CarrosService {
  constructor(private http: HttpService) {
  }

  get(): Observable<Carro[]>  {
    return this.http.get<Carro>('carros');
  }

  getByID(id: number): Observable<Carro> {
   return this.http.getByID<Carro>('carros', id);
  }


}
