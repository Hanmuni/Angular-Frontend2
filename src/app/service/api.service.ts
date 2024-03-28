import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDo} from "../../entity/ToDo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private username: string = "admin"
  private password: string = "password"
  private todoUrl: string = `http://localhost:8081/todo`

  constructor(private httpClient: HttpClient) {
  }

  private authorization() {
    return {
      headers: {
        Authorization: "Basic " + btoa(this.username + ":" + this.password)
      }
    }
  }

  public getToDos(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.todoUrl, this.authorization());
  }

  public createToDo(toDo: ToDo): Observable<ToDo> {
    return this.httpClient.post<ToDo>(this.todoUrl, toDo, this.authorization());
  }

  public removeToDo(toDo: ToDo): Observable<ToDo> {
    return this.httpClient.delete<ToDo>(`${this.todoUrl}/${toDo.id}`, this.authorization());
  }

  public updateToDo(toDo: ToDo): Observable<ToDo> {
    return this.httpClient.put<ToDo>(this.todoUrl, toDo, this.authorization());
  }

  public getToDoById(id: number): Observable<ToDo> {
    return this.httpClient.get<ToDo>(`${this.todoUrl}/${id}`, this.authorization());
  }

}

