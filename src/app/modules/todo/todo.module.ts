import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [TodoComponent],
  declarations: 
  [
    TodoComponent,
    TaskComponent
  ]
})
export class TodoModule { }
