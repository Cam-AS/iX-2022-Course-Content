import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task: Task = new Task();
  tasks: Task[] = [];

  edit: boolean = false;

  constructor(private taskService: TaskListService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.task.id = this.tasks.length;
    this.tasks.push(this.task);
    this.task = new Task();
  }

  editTask(task: Task) {
    this.edit = true;
    this.task = task;
  }
  
  updateTask() {
    this.edit = true;
    this.tasks = this.tasks.filter((x) => x.id != this.task.id);
    this.tasks.push(this.task);
    this.task = new Task();
    this.edit = false;
  }

  deleteTask(task: Task) {
    this.tasks = this.taskService.deleteTasks(this.tasks, task);
  }

}
