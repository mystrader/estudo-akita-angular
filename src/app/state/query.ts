import { Query } from "@datorama/akita";
import { TodoState, TodoStore } from "./store";
import { Observable } from "rxjs";
import { Todo } from "../todo.model";

export class todoQuery extends Query<TodoState> {
  constructor(private todoStore: TodoStore) {
    super(todoStore);
  }

  getTodos(): Observable<Todo[]> {
    return this.select((state) => state.todos);
  }

  getLoaded(): Observable<boolean> {
    return this.select((state) => state.isLoaded);
  }

  getLoading(): Observable<boolean> {
    return this.selectLoading();
  }

}
