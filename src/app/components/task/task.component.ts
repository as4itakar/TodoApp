import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent{

  @Input() task: Task

  @Output() taskEmitter = new EventEmitter<Task>()

  @Output() deleteEmitter = new EventEmitter<number>()

  taskChanged: boolean = false

  constructor() { }

  changeTitle(title: string): void{
    this.task.title = title
  }

  changeAbout(about: string): void{
    this.task.about = about
  }

  startChanges(): void{
    this.taskChanged = true
  }

  saveChanges(): void{
    this.taskEmitter.emit(this.task)
    this.taskChanged = false
  }

  deleteTask(): void{
    this.deleteEmitter.emit(this.task.id)
  }

}
