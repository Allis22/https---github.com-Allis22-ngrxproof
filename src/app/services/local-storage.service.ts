import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly STORAGE_KEY = 'todo-list';

  constructor() { }

  // Obtiene todas las tareas del Local Storage
  getTodos(): any[] {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  }

  // Guarda la lista completa de tareas en el Local Storage
  saveTodos(todos: any[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
  }

  // Limpia todas las tareas del Local Storage
  clearTodos(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}