import { Component, OnInit } from '@angular/core';
import { MenuItem } from './componentes/nav-bar/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 public menu: MenuItem[];

  ngOnInit() {
    this.menu =  [
      {
        titulo: 'Carros', url: null,
        menus: [
        {titulo: 'Listagem', url: 'carros', menus: null},
        {titulo: 'Novo', url: 'carros/novo', menus: null}
      ]
    }
    ];
  }


}
