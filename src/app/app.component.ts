import { Component, ViewChild } from '@angular/core';
import { Action } from './interfaces/action';
import { ActionmenuComponent } from './actionmenu/actionmenu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'case-actionmenu';

  clickedAction: string; // stores last clicked action for this demo

  // example actions 1
  actionSet1: Action[][] = [
    [
      { iconPath: 'assets/icons/edit.svg', label: 'Share', 'identifier': 'share' },
      { iconPath: 'assets/icons/edit.svg', label: 'Edit', 'identifier': 'edit' },
      { iconPath: 'assets/icons/remove.svg', label: 'Delete', 'identifier': 'delete' }
    ]
  ]

  // example actions 2
  actionSet2: Action[][] = [
    [
      { iconPath: 'assets/icons/edit.svg', label: 'Present', 'identifier': 'present' },
      { iconPath: 'assets/icons/edit.svg', label: 'Open Mentimote', 'identifier': 'mentimote' },
      { iconPath: 'assets/icons/remove.svg', label: 'Export results', 'identifier': 'export' }
    ], [
      { iconPath: 'assets/icons/edit.svg', label: 'Share with organization', 'identifier': 'organization' },
      { iconPath: 'assets/icons/remove.svg', label: 'Share voting link', 'identifier': 'link' }
    ], [
      { iconPath: 'assets/icons/edit.svg', label: 'Rename', 'identifier': 'rename' },
      { iconPath: 'assets/icons/edit.svg', label: 'Move to Folder', 'identifier': 'move' },
      { iconPath: 'assets/icons/edit.svg', label: 'Duplicate', 'identifier': 'duplicate' },
      { iconPath: 'assets/icons/remove.svg', label: 'Delete', 'identifier': 'delete' }
    ]
  ]

  @ViewChild('actionmenu') actionmenu: ActionmenuComponent;
}
