import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() taskList: any = []
  @Output() deleteTaskEmitter = new EventEmitter();

  deleteTask(id: Number) {
    this.deleteTaskEmitter.emit(id);
  }

}
