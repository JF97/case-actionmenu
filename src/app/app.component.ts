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

  // example actions 1
  actionSets1: Action[][] = [
    [
      { iconPath: 'x', label: 'Share', 'identifier': 'share' },
      { iconPath: 'x', label: 'Edit', 'identifier': 'edit' },
      { iconPath: 'x', label: 'Delete', 'identifier': 'delete' }
    ]
  ]

  // example actions 2
  actionSets2: Action[][] = [
    [
      { iconPath: 'x', label: 'Present', 'identifier': 'present' },
      { iconPath: 'x', label: 'Open Mentimote', 'identifier': 'mentimote' },
      { iconPath: 'x', label: 'Export results', 'identifier': 'export' }
    ], [
      { iconPath: 'x', label: 'Share with organization', 'identifier': 'organization' },
      { iconPath: 'x', label: 'Share voting link', 'identifier': 'link' }
    ], [
      { iconPath: 'x', label: 'Rename', 'identifier': 'rename' },
      { iconPath: 'x', label: 'Move to Folder', 'identifier': 'move' },
      { iconPath: 'x', label: 'Duplicate', 'identifier': 'duplicate' },
      { iconPath: 'x', label: 'Delete', 'identifier': 'delete' }
    ]
  ]

  @ViewChild('actionmenu1') actionmenu1: ActionmenuComponent;
  @ViewChild('actionmenu2') actionmenu2: ActionmenuComponent;
}
