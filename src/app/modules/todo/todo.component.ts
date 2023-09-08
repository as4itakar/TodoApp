import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPanelComponent } from 'src/app/components/add-panel/add-panel.component';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  tasks: Task

  status: string = "Поиск заметок..."

  constructor(private taskService: TaskCrudService, private dialogRef: MatDialog){}

  openDialog(): void{
    this.dialogRef.open(AddPanelComponent).afterClosed().subscribe(
      (item) => {
        if (item.success){
          this.taskService.addTask(item).subscribe()
        }
      }
    )
  }
}
