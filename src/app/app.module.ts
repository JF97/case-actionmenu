import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionmenuComponent } from './actionmenu/actionmenu.component';
import { ActionComponent } from './actionmenu/action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionmenuComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
