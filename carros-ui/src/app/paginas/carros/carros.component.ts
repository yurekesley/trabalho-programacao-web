import { Router } from '@angular/router';
import { Carro } from './../../model/carro';
import { CarrosService } from './carros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  carros: Carro[];
  constructor(
      private service: CarrosService
    , private route: Router) { }

  ngOnInit() {
    this.getCarros();
  }

  getCarros() {
    this.service.get().subscribe(carros => {
      this.carros = [...carros ,  {
        id: 1,
        dataEmplacamento: new Date(),
        nomeProprietario: 'Yure Kesley',
        placa: 'HVA-0830',
        valorIpva: 250.85
      },
      {
        id: 2,
        dataEmplacamento: new Date(),
        nomeProprietario: 'Yure Kesley',
        placa: 'HVA-0830',
        valorIpva: 250.85
      }];
    });
  }

  editar(carroId: number) {
    this.route.navigate(['editar', carroId ]);
  }
}
