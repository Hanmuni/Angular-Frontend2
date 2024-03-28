import {Component, OnInit} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import {Router} from "@angular/router";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  todos: ToDo[] = [];

  constructor(private router: Router, private toDoService: TodoService) {
  }

  ngOnInit() {
    this.toDoService.getAllToDos().subscribe(response => {
      this.todos = response;
    });
  }

}
