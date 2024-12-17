import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { loadTodos, addTodo, updateTodo, deleteTodo } from '../../store/actions/todo.actions';
import { selectAllTodos } from '../../store/selectors/todo.selectors';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  addTodo(title: string): void {
    const newTodo: Todo = { id: uuidv4(), title, completed: false };
    this.store.dispatch(addTodo({ todo: newTodo }));
  }

  updateTodo(todo: Todo): void {
    const updatedTodo = { ...todo, completed: !todo.completed };
    this.store.dispatch(updateTodo({ todo: updatedTodo }));
  }

  deleteTodo(id: string): void {
    this.store.dispatch(deleteTodo({ id }));
  }
}
