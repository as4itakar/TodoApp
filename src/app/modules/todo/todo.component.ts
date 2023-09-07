import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddPanelComponent } from 'src/app/components/add-panel/add-panel.component';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  
  getSub: Subscription

  tasks: Task

  constructor(private taskService: TaskCrudService, private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.getTask()
  }

  ngOnDestroy(): void {
    this.getSub.unsubscribe()
  }

  getTask(): void{
    this.getSub = this.taskService.getTasks().subscribe(
      (task) => this.tasks = task
    )
  }

  putTask(task: any){
    this.taskService.changeTask(task).subscribe()
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe(
      () => this.getTask()
    )
  }

  openDialog(){
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
