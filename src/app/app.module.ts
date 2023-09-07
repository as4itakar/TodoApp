import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: 
  [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
