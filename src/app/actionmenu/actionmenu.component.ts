import { Component, OnInit, OnDestroy, Input, ElementRef, Output, EventEmitter } from '@angular/core';
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
  actionsAlt: Action[][];

  @Input() actions: Action[][];
  @Input() menuPosition: Placement;
  @Input() positioningTargetId: string;

  @Output() action: EventEmitter<string> = new EventEmitter<string>();

  constructor(private el: ElementRef) { }

  // emits action event with action identifier and hides menu when an action was clicked
  actionClicked(action: string): void {
    this.action.emit(action);
    this.hideMenu();
  }
  
  // hides actionmenu if click event was fired outside the component
  checkOutsideClicks(event: MouseEvent): void {
    if (this.menuVisible && !this.el.nativeElement.contains(event.target)) {
      this.hideMenu();
    }
  }

  // hides the actionmenu and removes unnecessary data/listeners
  hideMenu(): void {
    if (this.popper) {
      this.popper.destroy();
    }
    this.actionsAlt = null;
    this.menuVisible = false;
    document.removeEventListener('mousedown', (e) => this.checkOutsideClicks(e));
  }
  
  // shows the actionmenu
  // takes optional arguments actions, menuPosition and positioningTargetId
  // for overriding values of Input variables
  showMenu(actions?: Action[][], menuPosition?: Placement, positioningTargetId?: string): void {
    const menuPos = menuPosition;
    const posTarget = positioningTargetId;
    this.actionsAlt = actions;

    // popper.js for positioning
    const options: PopperOptions = { placement: menuPos || this.menuPosition };
    const target = document.getElementById(posTarget || this.positioningTargetId);
    this.popper = new Popper(target, this.el.nativeElement, options);

    this.menuVisible = true;
    
    // adds listener for clicks outside component
    document.addEventListener('mousedown', (e) => this.checkOutsideClicks(e));
  }

  // shows the actionmenu if hidden, hides it if visible
  toggleMenu(actions?: Action[][], menuPosition?: Placement, positioningTargetId?: string): void {
    if (this.menuVisible) {
      this.hideMenu();
    } else {
      this.showMenu(actions, menuPosition, positioningTargetId);
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
