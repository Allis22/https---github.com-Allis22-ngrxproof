import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo';

export const loadTodos = createAction('[TODO] Load Todos from LocalStorage');
export const loadTodosSuccess = createAction('[TODO] Load Todos Success', props<{ todos: Todo[] }>());
export const addTodo = createAction('[TODO] Add Todo', props<{ todo: Todo }>());
export const updateTodo = createAction('[TODO] Update Todo', props<{ todo: Todo }>());
export const deleteTodo = createAction('[TODO] Delete Todo', props<{ id: string }>());