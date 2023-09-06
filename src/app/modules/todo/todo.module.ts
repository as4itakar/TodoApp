import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [TodoComponent],
  providers: [
    TaskCrudService
  ],
  declarations: 
  [
    TodoComponent,
    TaskComponent
  ]
})
export class TodoModule { }
