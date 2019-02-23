import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-coluna',
  templateUrl: './coluna.component.html',
  styleUrls: ['./coluna.component.scss']
})
export class ColunaComponent implements OnInit {

  @Input() atributo: string;
  @Input() valorCabecalho: string;
  @Input() tamanho = '1';
  @Input() ordenavel = false;
  @Input() tooltip = false;
  @Input() ehCheckbox = false;

  @ContentChild(TemplateRef) template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
