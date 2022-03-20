import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
})
export class FormWrapperComponent {

  taskList: any[] = [];

  addTask(task: any) {
    this.taskList = [...this.taskList, task]
  }

  deleteTask(id: Number) {
    this.taskList = this.taskList.filter(task => task.id !== id)
  }
}
