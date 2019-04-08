import { Carro } from './../../model/carro';
import { HttpService } from './../../services/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CarrosService {
  constructor(private http: HttpService) {
  }

  get(): Observable<Carro[]>  {
    return this.http.get<Carro>('carros');
  }

  getByID(id: number): Observable<Carro> {
   return this.http.getByID<Carro>('carros', id);
  }

  salvar(carro: Carro): Observable<Carro> {
   return this.http.post('carros', carro);
  }

  atualizar(carro: Carro): Observable<Carro> {
    return this.http.put('carros', carro);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete('carros', id);
  }

}
