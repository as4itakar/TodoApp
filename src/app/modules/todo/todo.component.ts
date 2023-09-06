import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  
  taskSub: Subscription

  tasks: Task

  constructor(private taskService: TaskCrudService){}

  ngOnInit(): void {
    this.taskSub = this.taskService.getTasks().subscribe(
      (task) => this.tasks = task
    )
  }

  sendTask(task: any){
    this.taskService.changeTask(task).subscribe(
      (data) => console.log(data)
    )
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe(
      (data) => console.log(this.tasks)
    )
  }

}
