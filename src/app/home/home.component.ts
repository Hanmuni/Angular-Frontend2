import {Component} from '@angular/core';
import {todos} from "../../mock/ToDoList";
import {ToDo} from "../../entity/ToDo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  todos: ToDo[] = todos;
  constructor(private router: Router) {
  }

}
