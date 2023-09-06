import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/types/Task';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { title } from 'process';

@Injectable()
export class TaskCrudService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task>{
    return this.http.get('http://localhost:3000/tasks').pipe(
      map( (task) => <Task>task)
    )
  }

  changeTask(task: Task): Observable<Object>{
    console.log(task)
    const headers = new HttpHeaders().set('Content-type', 'application/json')
    return this.http.put('http://localhost:3000/tasks/' + task.id, {title: task.title, about: task.about}, {headers})
  }

  deleteTask(id: number): Observable<Object>{
    return this.http.delete('http://localhost:3000/tasks/' + id)
  }
}
