import {Component, Input} from '@angular/core';
import {TodoService} from "../service/todo.service";
import {ToDo} from "../../entity/ToDo";
import {Router} from "@angular/router";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  providers: [TodoService]
})
export class TodoComponent {
  @Input() toDo!: ToDo;

  constructor(public router: Router, public toDoService: TodoService) {

  }

  update(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

  protected readonly ToDo = ToDo;
}
