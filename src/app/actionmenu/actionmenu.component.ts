import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { Action } from '../interfaces/action';
import Popper, { PopperOptions, Placement } from 'popper.js';

@Component({
  selector: 'app-actionmenu',
  templateUrl: './actionmenu.component.html',
  styleUrls: ['./actionmenu.component.scss']
})
export class ActionmenuComponent implements OnInit, OnDestroy {

  menuVisible = false;
  popper: Popper;

  @Input() actionSets: Action[][];
  @Input() menuPosition: Placement;
  @Input() positioningTargetId: string;

  constructor(private el: ElementRef) { }

  // shows the actionmenu
  showMenu(): void {
    // popper.js for positioning
    const options: PopperOptions = { placement: this.menuPosition };
    const target = document.getElementById(this.positioningTargetId);
    this.popper = new Popper(target, this.el.nativeElement, options);

    this.menuVisible = true;
  }

  // hides the actionmenu
  hideMenu(): void {
    if (this.popper) {
      this.popper.destroy();
    }
    this.menuVisible = false;
  }

  // shows the actionmenu if hidden, hides it if visible
  toggleMenu(): void {
    if (this.menuVisible) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.popper) {
      this.popper.destroy();
    }
  }

}
