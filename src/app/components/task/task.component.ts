import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task

  @Output() taskEmitter = new EventEmitter<Task>()

  @Output() deleteEmitter = new EventEmitter<number>()

  taskChanged: boolean = false

  constructor() { }

  ngOnInit() {
  }

  changeTitle(title: string){
    this.task.title = title
  }

  changeAbout(about: string){
    this.task.about = about
  }

  startChanges(){
    this.taskChanged = true
  }

  saveChanges(){
    this.taskEmitter.emit(this.task)
    this.taskChanged = false
  }

  deleteTask(){
    this.deleteEmitter.emit(this.task.id)
  }

}
