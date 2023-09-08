import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { TodoComponent } from './todo.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import { AddPanelComponent } from 'src/app/components/add-panel/add-panel.component';


@NgModule({
  imports: 
  [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    TodoComponent,
    TaskComponent,
    AddPanelComponent
  ],
  declarations: 
  [
    TodoComponent,
    TaskComponent,
    AddPanelComponent,
  ]
})
export class TodoModule { }
