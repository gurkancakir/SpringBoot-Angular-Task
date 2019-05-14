import { Component, OnInit } from '@angular/core';
import { Task } from "./task.model";

import { TaskService } from "./task.service";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(protected taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      (tasks : any[]) => {
        this.tasks = tasks
      },
      (error) => console.log(error)
    );

    this.taskService.onTaskAded.subscribe(
      (newTask:Task) => this.tasks.push(newTask)
    );
  }

  handleEdit(event : Task) {
    this.taskService.saveTask(event).subscribe();
  }

  onTaskAdded(event : Task) {
    this.taskService.addTask(event).subscribe(
      (task: Task) => {
        console.log(task);
        this.tasks.splice( this.tasks.length, 0, task);
      },
      (error) => console.log(error)
    );
  }

}
