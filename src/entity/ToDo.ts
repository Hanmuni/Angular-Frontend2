export class ToDo {
  id: number;
  toDo: string;
  author: string;
  completed: boolean;


  constructor(id: number, todo: string, author: string, completed: boolean) {
    this.id = id;
    this.toDo = todo;
    this.author = author;
    this.completed = completed;
  }

}
