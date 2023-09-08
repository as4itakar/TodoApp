import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskSubjectService } from 'src/app/services/task-subject/task-subject.service';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  
  taskSub: Subscription

  @Input() state: boolean

  @Output() stateChange = new EventEmitter<boolean>();

  constructor(private taskService: TaskCrudService, private taskSubject: TaskSubjectService) { }

  tasks: Task

  ngOnInit(): void {
    this.taskSub = this.taskSubject.subOnTasks().subscribe(
      task => this.tasks = task
    )
    this.taskService.getTasks()
  }

  ngOnDestroy(): void {
    this.taskSub.unsubscribe()
  }

  changeState(){
    this.state = false
    this.stateChange.emit(false)
  }

}
