import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {

  @Input()
  task:Task;

  @Output()
  edit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onTaskChange(event) {
    this.task.completed = event.target.checked;
    this.edit.emit(this.task);
  }

}
