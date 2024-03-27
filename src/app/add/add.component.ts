import {Component} from '@angular/core';
import {TodoService} from "../service/todo.service";
import {ToDo} from "../../entity/ToDo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  toDo: ToDo = {id: 0, author: '', todo: '', completed: false};

  constructor(private toDoService: TodoService, private router: Router) {
  }

  add(toDo: ToDo) {
    this.toDoService.createToDo(toDo);
    this.router.navigate(['/']);
  }
}
