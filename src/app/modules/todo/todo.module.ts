import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPanelComponent } from 'src/app/components/add-panel/add-panel.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  exports: 
  [
    TodoComponent, 
    AddPanelComponent
  ],
  providers: [
    TaskCrudService
  ],
  declarations: 
  [
    TodoComponent,
    TaskComponent,
    AddPanelComponent
  ]
})
export class TodoModule { }
