import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomizableLibModule } from 'custom-lib-by-dayanand';
import { UseCustomLib } from './components/usecustomlib-component.component';
@NgModule({
  declarations: [
    AppComponent,
    UseCustomLib
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomizableLibModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
