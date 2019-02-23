import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ColunaComponent } from './coluna/coluna.component';
import { buscarValor } from 'src/app/util/funcoes.util';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  @ContentChildren(ColunaComponent, { descendants: true })
  public colunas: QueryList<ColunaComponent>;

  private listaRenderizada: MatTableDataSource<any> = new MatTableDataSource<any>();
  private listaCompleta: MatTableDataSource<any> = new MatTableDataSource<any>();


  @Input() public set lista(value: any[]) {
    this.listaCompleta = new MatTableDataSource(value ? value : []);
  }

  public get lista() {
    return this.getLista().data;
  }

  constructor() { }

  ngOnInit() {}

  public getLista(): MatTableDataSource<any> {
     return this.listaCompleta;
  }

  public getCabecalho() {
    const listaCabecalho = [];
    this.colunas.forEach(coluna => {
      listaCabecalho.push(coluna.atributo);
    });

    return listaCabecalho;
  }

  buscarValor(item: any, atributo: string ) {
   return buscarValor(item, atributo, '');
  }

}
