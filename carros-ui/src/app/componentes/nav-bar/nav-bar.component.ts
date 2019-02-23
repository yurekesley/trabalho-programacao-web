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

  @Input() menu: MenuItem[];

  ngOnInit() {
  }

}
