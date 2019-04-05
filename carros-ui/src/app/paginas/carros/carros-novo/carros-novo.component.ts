import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { marcarComoTocado, error } from 'src/app/util/funcoes.util';
import { Router } from '@angular/router';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carros-novo',
  templateUrl: './carros-novo.component.html',
  styleUrls: ['./carros-novo.component.scss']
})
export class CarrosNovoComponent implements OnInit {

  formCarro: FormGroup;
  constructor(
      private fb: FormBuilder
    , private router: Router
    , private service: CarrosService
    ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCarro = this.fb.group({
      placa: ['', Validators.required],
      nomeProprietario: ['', Validators.required],
      dataEmplacamento: ['', Validators.required],
      valorIpva: ['', Validators.required]
    });
  }

  public salvar() {

    if (this.formCarro.invalid) {
        marcarComoTocado(this.formCarro);
        return;
    }

    this.service.salvar(this.formCarro.value).subscribe(carro => {
      alert('Carro Salvo com Sucesso');
    });
  }

 public cancelar() {
  this.router.navigate(['']);
 }


  public mostrarError(controll: AbstractControl): string {
    return error(controll);
  }

}
