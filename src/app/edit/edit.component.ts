import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import {TodoService} from "../service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  toDo!: ToDo;


  constructor(public route: ActivatedRoute, public toDoService: TodoService, public router: Router) {

  }

  ngOnInit() {
    let id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.toDo = this.toDoService.getToDoById(id)!;
  }

  update(toDo: ToDo) {
    this.toDoService.updateToDo(toDo);
    this.router.navigate(['/']);
  }
}
