import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, take, tap } from 'rxjs/operators';
import { Task } from 'src/app/types/Task';
import { TaskSubjectService } from '../task-subject/task-subject.service';

@Injectable({
  providedIn: 'root'
})
export class TaskConfigService {

  constructor(private taskSubject: TaskSubjectService) { }

  pipeMethod(stream$: Observable<Task>, message: string): Observable<Task>{
    return stream$.pipe(
      retry(2),
      catchError(() => throwError(new Error(message))),
      take(1)
    )
  }

  pipeRecallMethod(stream$: Observable<Task>, message: string, method: Observable<Task>): Observable<Task>{
    return stream$.pipe(
      retry(2),
      catchError(() => throwError(new Error(message))),
      tap( () =>  this.callSub(method)),
      take(1)
    )
  }

  callSub(method: Observable<Task>): void{
    method.subscribe( data => this.taskSubject.subOnTasks().next(data))
  }
}
