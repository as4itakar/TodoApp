import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TodoComponent } from './modules/todo/todo.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'tasks', component: TodoComponent},
  {path: 'tasks/:id', component: TaskComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
