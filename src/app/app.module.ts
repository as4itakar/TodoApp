import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
