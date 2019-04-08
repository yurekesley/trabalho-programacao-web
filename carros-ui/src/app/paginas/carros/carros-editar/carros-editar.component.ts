import { CarrosService } from './../carros.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { error } from 'src/app/util/funcoes.util';
import { Carro } from 'src/app/model/carro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carros-editar',
  templateUrl: './carros-editar.component.html',
  styleUrls: ['./carros-editar.component.scss']
})
export class CarrosEditarComponent implements OnInit {
  formCarro: FormGroup;
  carro: Carro;
  constructor(
      private fb: FormBuilder
    , private carroService: CarrosService
    , private route: Router
    , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.carro = this.activatedRoute.snapshot.data['carro'];
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCarro = this.fb.group({
      placa: ['', Validators.required],
      nomeProprietario: ['', Validators.required],
      dataEmplacamento: ['', Validators.required],
      valorIpva: ['', Validators.required]
    });

    this.carro.dataEmplacamento =  this.formatarLongParaData(this.carro.dataEmplacamento);
    this.formCarro.patchValue(this.carro);

  }

  public formatarLongParaData(dataNumerica: number | Date) {
    return new Date(dataNumerica);
  }

  public mostrarError(controll: AbstractControl): string {
    return error(controll);
  }

  public atualizar() {
    this.carro = Object.assign(this.carro, this.formCarro.value) ;
    this.carroService.atualizar(this.carro).subscribe(carroAtualizado =>{
      alert('Atualizado com sucesso !!');
      this.redirecionarInicio();
    });
  }

  public cancelar() {
    this.redirecionarInicio();
  }

  public redirecionarInicio() {
    this.route.navigate(['/']);
  }

}
