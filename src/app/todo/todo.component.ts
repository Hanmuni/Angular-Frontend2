import {Component, Inject, Input, OnInit} from '@angular/core';
import {TodoService} from "../service/todo.service";
import {ToDo} from "../../entity/ToDo";
import {Router} from "@angular/router";
import {HomeComponent} from "../home/home.component";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  providers: [TodoService]
})
export class TodoComponent {
  @Input() toDo!: ToDo;

  constructor(public router: Router, public toDoService: TodoService, @Inject(HomeComponent) private homeComponent: HomeComponent) {

  }

  remove() {
    this.toDoService.removeToDo(this.toDo).subscribe(response => {
      this.homeComponent.ngOnInit();
    });
  }


  update(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

}
