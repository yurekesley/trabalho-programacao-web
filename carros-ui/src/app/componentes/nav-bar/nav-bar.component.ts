import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  @Input() mostrarMenu = true;

  @Input() menu: MenuItem[] = [
    {titulo: 'MENU 1', url: 'teste1', menus: [
      {titulo: 'MENU 1.2', url: 'teste1', menus: null}
    ]},
    {titulo: 'MENU 2', url: 'teste2', menus: []},
    {titulo: 'MENU 3', url: 'teste3', menus: []},
  ];


  ngOnInit() {
  }

}
