import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, take } from 'rxjs/operators';
import { Task } from 'src/app/types/Task';

@Injectable()
export class TaskConfigService {
  pipeMethod(stream$: Observable<Task>, message: string): Observable<Task>{
    return stream$.pipe(
      retry(2),
      catchError( () => 
        throwError(new Error(message))),
      take(1)
    )
  }
}

