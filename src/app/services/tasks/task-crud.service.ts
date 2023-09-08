import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/types/Task';
import { Observable } from 'rxjs';
import { NewTask } from 'src/app/types/NewTask';
import { TaskConfigService } from '../task-config/task-config.service';

@Injectable()
export class TaskCrudService {

  headers = new HttpHeaders()

  get: Observable<Task>

  url: string = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient, private taskConfigService: TaskConfigService) { 
    this.headers.set('Content-type', 'application/json')
  }

  getTasks(): void{
    const stream$ = this.http.get<Task>(this.url)
    this.get = this.taskConfigService.pipeMethod(stream$, 'Заметок не найдено')
    this.taskConfigService.callSub(this.get)
  }

  getTasksById(id: number): Observable<Task>{
    const stream$: Observable<Task> = this.http.get<Task>(this.url + '/' + id)
    return this.taskConfigService.pipeMethod(stream$, 'Заметка не найдено...')
  }

  changeTask(task: Task): Observable<Task>{
    const stream$: Observable<Task> = this.http.put<Task>(this.url + '/' + task.id, {title: task.title, about: task.about}, {headers: this.headers})
    return this.taskConfigService.pipeRecallMethod(stream$, 'Не удалось изменить заметку...', this.get)
  }

  deleteTask(id: number): Observable<Task>{
    const stream$: Observable<Task> = this.http.delete<Task>(this.url + '/' + id)
    return this.taskConfigService.pipeRecallMethod(stream$, 'Не удалось удалить заметку...', this.get)
  }

  addTask(newTask: NewTask): Observable<Task>{
    const stream$: Observable<Task> = this.http.post<Task>(this.url, {title: newTask.title, about: newTask.about}, {headers: this.headers})
    return this.taskConfigService.pipeRecallMethod(stream$, 'Не удалось добавить заметку...', this.get)
  }
}
