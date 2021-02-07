import { HomeComponent } from './home/home.component';
import { AddTodoComponentComponent } from './add-todo-component/add-todo-component.component';
import { Route } from '@angular/router';



export const ROUTES : Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-todo',
    component: AddTodoComponentComponent
  }
]


