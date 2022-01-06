import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  tasks: Task[] = [];
  constructor() {}

  deleteTasks(tasks: Task[], task: Task) {
    this.tasks = tasks;
    this.tasks = this.tasks.filter((x) => x.id != task.id);
    return this.tasks;
  }
}
