export class ToDo {
  id: number;
  todo: string;
  author: string;
  completed: boolean;


  constructor(id: number, todo: string, author: string, completed: boolean) {
    this.id = id;
    this.todo = todo;
    this.author = author;
    this.completed = completed;
  }

}
