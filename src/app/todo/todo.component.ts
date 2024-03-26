import {Component, Input} from '@angular/core';
import {ToDo} from "../../entity/toDo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() toDo!: ToDo;

}
