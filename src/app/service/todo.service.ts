import {Injectable} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import {todos} from "../../mock/ToDoList";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: ToDo[] = todos;


  constructor() {
  }

  public createToDo(toDo: ToDo): void {
    todos.push(toDo);
  }

  public removeToDo(todo: ToDo): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  public updateToDo(updatedToDo: ToDo): void {
    let todo = this.todos.find(element => element.id === updatedToDo.id)!;
    let index = this.todos.indexOf(todo);
    this.todos[index] = updatedToDo;
  }


  public getAllToDos(): ToDo[] {
    return todos;
  }

  public getToDoById(id: number): ToDo | undefined {
    return todos.find((toDo: ToDo) => toDo.id === id);
  }

}
