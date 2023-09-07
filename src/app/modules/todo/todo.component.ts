import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPanelComponent } from 'src/app/components/add-panel/add-panel.component';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task

  status: string = "Поиск заметок..."

  constructor(private taskService: TaskCrudService, private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.getTask()
  }

  getTask(): void{
    this.taskService.getTasks().subscribe(
      (task) => {
        this.tasks = task
        this.status = ''
      },
      (err: Error) => {
        this.status = err.message
      }
    )
  }

  putTask(task: Task): void{
    this.taskService.changeTask(task).subscribe()
  }

  deleteTask(id: number): void{
    this.taskService.deleteTask(id).subscribe(
      () => this.getTask()
    )
  }

  openDialog(): void{
    this.dialogRef.open(AddPanelComponent).afterClosed().subscribe(
      (item) => {
        if (item.success){
          this.taskService.addTask(item).subscribe(
            () => this.getTask()
          )
        }
      }
    )
  }
}
