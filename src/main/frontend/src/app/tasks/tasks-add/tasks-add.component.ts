import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Task } from "../task.model";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.sass']
})
export class TasksAddComponent implements OnInit {

  value : string = "";

  @Output()
  onTaskAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onTaskAdd(event) {
    let task: Task = new Task(event.target.value, false, this.getTodayAsString());
    this.onTaskAdded.emit(task);
    this.value = "";
  }

  getTodayAsString() {
    let today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return mm + "/" + dd + "/" + yyyy;
  }
}
