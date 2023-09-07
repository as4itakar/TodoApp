import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { TodoRoutingModule } from './todo-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoComponent } from './todo.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import { AddPanelComponent } from 'src/app/components/add-panel/add-panel.component';

import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { TaskConfigService } from 'src/app/services/task-config/task-config.service';


@NgModule({
  imports: 
  [
    CommonModule,
    TodoRoutingModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: 
  [
    TaskCrudService,
    TaskConfigService
  ],
  declarations: 
  [
    TodoComponent,
    TaskComponent,
    AddPanelComponent
  ]
})
export class TodoModule { }
