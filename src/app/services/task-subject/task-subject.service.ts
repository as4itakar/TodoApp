import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from 'src/app/types/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskSubjectService {

  taskSubject: Subject<Task> = new Subject()

  constructor() { }

  subOnTasks(): Subject<Task>{
    return this.taskSubject
  }

}
