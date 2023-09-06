import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TaskComponent } from 'src/app/components/task/task.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TodoComponent],
  declarations: 
  [
    TodoComponent,
    TaskComponent
  ]
})
export class TodoModule { }
