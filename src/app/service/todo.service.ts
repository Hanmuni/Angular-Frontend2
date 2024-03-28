import {Injectable} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private apiService: ApiService) {
  }

  public createToDo(toDo: ToDo): Observable<ToDo> {
    return this.apiService.createToDo(toDo);
  }

  public removeToDo(toDo: ToDo): Observable<ToDo> {
    return this.apiService.removeToDo(toDo);
  }

  public updateToDo(updatedToDo: ToDo): Observable<ToDo> {
  return this.apiService.updateToDo(updatedToDo);
  }


  public getAllToDos(): Observable<ToDo[]> {
    return this.apiService.getToDos();
  }

  public getToDoById(id: number): Observable<ToDo> {
    return this.apiService.getToDoById(id);
  }

}
