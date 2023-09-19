import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccesComponent } from './succes/succes.component';
import { NeutralComponent } from './neutral/neutral.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccesComponent,
    NeutralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
