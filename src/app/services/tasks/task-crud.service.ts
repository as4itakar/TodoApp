import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/types/Task';
import { Observable } from 'rxjs';
import { NewTask } from 'src/app/types/NewTask';
import { TaskConfigService } from '../task-config/task-config.service';

@Injectable()
export class TaskCrudService {

  headers = new HttpHeaders()

  url: string = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient, private taskConfig: TaskConfigService) { 
    this.headers.set('Content-type', 'application/json')
  }

  getTasks(): Observable<Task>{
    const stream$: Observable<Task> = this.http.get<Task>(this.url)
    return this.taskConfig.pipeMethod(stream$, 'Заметок не найдено...')
  }

  changeTask(task: Task): Observable<Task>{
    const stream$: Observable<Task> = this.http.put<Task>(this.url + '/' + task.id, {title: task.title, about: task.about}, {headers: this.headers})
    return this.taskConfig.pipeMethod(stream$, 'Не удалось изменить заметку...')
  }

  deleteTask(id: number): Observable<Task>{
    const stream$: Observable<Task> = this.http.delete<Task>(this.url + '/' + id)
    return this.taskConfig.pipeMethod(stream$, 'Не удалось удалить заметку...')
  }

  addTask(newTask: NewTask): Observable<Task>{
    const stream$: Observable<Task> = this.http.post<Task>(this.url, newTask, {headers: this.headers})
    return this.taskConfig.pipeMethod(stream$, 'Не удалось добавить заметку...')
  }
}
