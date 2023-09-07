import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/types/Task';
import { map, take } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { NewTask } from 'src/app/types/NewTask';

@Injectable()
export class TaskCrudService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task>{
    return this.http.get('http://localhost:3000/tasks').pipe(
      map( (task) => {
        console.log(task)
        return <Task>task
      }),
      take(1)
    )
  }

  changeTask(task: Task): Observable<Object>{
    console.log(task)
    const headers = new HttpHeaders().set('Content-type', 'application/json')
    return this.http.put('http://localhost:3000/tasks/' + task.id, {title: task.title, about: task.about}, {headers}).pipe(
      take(1)
    )
  }

  deleteTask(id: number): Observable<Object>{
    return this.http.delete('http://localhost:3000/tasks/' + id).pipe(
      take(1)
    )
  }

  addTask(newTask: NewTask): Observable<Object>{
    console.log('asd')
    const headers = new HttpHeaders().set('Content-type', 'application/json')
    return this.http.post('http://localhost:3000/tasks', newTask, {headers}).pipe(
      take(1)
    )
  }
}
