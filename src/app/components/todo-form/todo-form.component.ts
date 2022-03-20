import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  constructor() { }

  //State
  taskName = "";

  //Output Event
  @Output() taskCreating = new EventEmitter()

  addNewTask(value: any) {
    this.taskCreating.emit(value)
  }

  //Method
  submitask() {
    if (!this.taskName) return;

    const task = {
      id: new Date().getMilliseconds(),
      taskName: this.taskName
    }

    this.addNewTask(task);
    this.taskName = ""
  }

}
