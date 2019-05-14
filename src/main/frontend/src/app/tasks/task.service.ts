import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from "@angular/core";

import { Task } from "./task.model";
import { Observable } from "rxjs";

@Injectable()
export class TaskService {

  private readonly URL = "/api/v1/tasks"

  constructor(private httpClient: HttpClient) {}

  onTaskAded = new EventEmitter<Task>();

  getTasks() :Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.URL);
  }

  saveTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.URL}/save`, task);
  }

  addTask(task: Task) {
    return this.httpClient.post<Task>(`${this.URL}/save`, task);
  }

}
