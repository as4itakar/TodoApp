import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoModule } from './modules/todo/todo.module';
import { AppRoutingModule } from './app-routing-module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { TaskCrudService } from './services/tasks/task-crud.service';
import { TaskConfigService } from './services/task-config/task-config.service';
import { TaskSubjectService } from './services/task-subject/task-subject.service';


@NgModule({
  declarations: 
  [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent
  ],
  providers:
  [
    TaskCrudService,
    TaskConfigService,
    TaskSubjectService
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    TodoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
