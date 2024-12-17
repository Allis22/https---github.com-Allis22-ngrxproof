import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from '../reducers/todo.reducers';

export const selectTodosFeature = createFeatureSelector<TodoState>('todos');
export const selectAllTodos = createSelector(selectTodosFeature, (state) => state.todos);