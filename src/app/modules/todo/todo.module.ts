import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TodoComponent],
  declarations: [TodoComponent]
})
export class TodoModule { }
