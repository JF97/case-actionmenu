# CaseActionmenu

This project is a short demo for an actionmenu. I used the Angular Framework and popper.js for the actionmenu positioning. After installing node modules with `npm i` run the demo with `ng serve`. 

## How to use for development

During development the actionmenu can be used like this:

Add 
```typescript
ViewChild('actionmenu') actionmenu: ActionmenuComponent;
```
(+imports) to the controller of the component you want to add an actionmenu to.

Define some actions for the menu like this:
```typescript
actionSet = [  
  [
    { iconPath: 'assets/icons/edit.svg', label: 'Share', 'identifier': 'share' },
    { iconPath: 'assets/icons/edit.svg', label: 'Edit', 'identifier': 'edit' },
    { iconPath: 'assets/icons/remove.svg', label: 'Delete', 'identifier': 'delete' }
  ] 
]
```
Every action consists of a path to an icon file, a label that is displayed in the menu and an identifier that is used to determine which action was pressed.

Add
```html
<app-actionmenu #actionmenu (action)="eventHandler($event)"></app-actionmenu>
```
to the view of a component.

The menu can then be used with a button like this
```html
<app-actionmenu #actionmenu [actions]="actionSet" 
                            [menuPosition]="'bottom-start'" 
                            [positioningTargetId]="ambutton" 
                            (action)="eventHandler($event)">
</app-actionmenu>

<button id="ambutton" (click)="actionmenu.toggleMenu()">
  show actionmenu
</button>
```
or this
```html
<app-actionmenu #actionmenu (action)="eventHandler($event)"></app-actionmenu>

<button id="ambutton" (click)="actionmenu.toggleMenu(actionSet, 'bottom-start', 'ambutton')">
  show actionmenu
</button>
```

If the user clicks the button, an actionmenu will open with the specified actions in the specified position relative to the specified target. If the user clicks outside the actionmenu, the menu will close. If the user clicks on an action in the menu, an event 'action' will be fired which contains the identifier of the sepecific action that was clicked. You can then use an event handler that calls different functions depending on the event content.

