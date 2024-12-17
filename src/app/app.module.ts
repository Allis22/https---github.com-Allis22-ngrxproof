import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './store/reducers/todo.reducers';
import { TodoEffects } from './store/effects/todo.effects';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: todoReducer }), // Se registra el reducer en la store
    EffectsModule.forRoot([TodoEffects]), // Se agregan los efectos
    StoreDevtoolsModule.instrument({ maxAge: 25 }) // DevTools para monitorear el estado
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule { }