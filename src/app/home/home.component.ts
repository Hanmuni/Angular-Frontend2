import { Component } from '@angular/core';
import {todos} from "../../mock/ToDoList";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  protected readonly todos = todos;
}
