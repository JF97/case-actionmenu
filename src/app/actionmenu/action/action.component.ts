import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() iconPath: string;
  @Input() label: string;
  @Input() identifier: string;

  @Output() action: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  // emits the event 'action' with a string identifying the specific action
  emitActionEvent(): void {
    this.action.emit(this.identifier);
  }

  ngOnInit() {
  }

}
