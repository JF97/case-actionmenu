import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../interfaces/action';

@Component({
  selector: 'app-actionmenu',
  templateUrl: './actionmenu.component.html',
  styleUrls: ['./actionmenu.component.scss']
})
export class ActionmenuComponent implements OnInit {

  menuVisible = false;

  @Input() actionSets: Action[][];

  constructor() { }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  ngOnInit() {
  }

}
