import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit, OnDestroy{

  task: Task
  
  id: number

  idSub: Subscription

  taskChanged: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskCrudService, private route: Router) {
  }

  ngOnInit(): void {
    this.idSub = this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      this.getTask()
    })
  }

  ngOnDestroy(): void {
    this.idSub.unsubscribe()
  }

  getTask(): void{
    this.taskService.getTasksById(this.id).subscribe( 
      t => {
        this.task = t
      }
    )
  }

  changeTask(): void{
    this.taskChanged = true
  }

  saveTask(){
    this.taskService.changeTask(this.task).subscribe()
    this.taskChanged = false
  }

  deleteTask(){
    this.taskService.deleteTask(this.task.id).subscribe()
    this.route.navigate(['/tasks'])
  }

}
