import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import {MatButtonModule} from '@angular/material/button';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { AddPanelComponent } from 'src/app/components/add-panel/add-panel.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TodoRoutingModule } from './todo-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
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
