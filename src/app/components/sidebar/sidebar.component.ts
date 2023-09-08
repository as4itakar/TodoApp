import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskSubjectService } from 'src/app/services/task-subject/task-subject.service';
import { TaskCrudService } from 'src/app/services/tasks/task-crud.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() state: boolean

  @Output() stateChange = new EventEmitter<boolean>();

  constructor(private taskService: TaskCrudService, private taskSubject: TaskSubjectService) { }

  tasks: Task

  ngOnInit() {
    this.taskSubject.subOnTasks().subscribe(
      task => this.tasks = task
    )
    this.taskService.getTasks()
  }

  changeState(){
    this.state = false
    this.stateChange.emit(false)
  }

}
