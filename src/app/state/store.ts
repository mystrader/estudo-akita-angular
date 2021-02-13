import { Todo } from "../todo.model";
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

// ESTADO
export interface TodoState {
  todos: Todo[];
  isLoaded: boolean;
}

// ESTADO INICIAL
export const getInitialState = () => {
  return {
    todos: [],
    isLoaded: false,
  }
}

// INJEÇÃO INDEPENDENCIA
@Injectable({
  providedIn: 'root'
})

// CONFIG STORE
@StoreConfig({name: 'todo'})
export class TodoStore extends Store<TodoState>{
  constructor(){
    super(getInitialState())
  }
}
