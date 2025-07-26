import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService, Task } from '../shared/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
})
export class TodoComponent {
  tasks: Task[] = [];
  newTaskTitle = '';
  newTaskDescription = '';

  constructor(private todoService: TodoService, private router: Router) {
    this.tasks = this.todoService.getTasks();
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.todoService.addTask({
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        completed: false
      });
      this.newTaskTitle = '';
      this.newTaskDescription = '';
      this.tasks = this.todoService.getTasks();
    }
  }

  toggleTask(index: number) {
    this.todoService.toggleTask(index);
    this.tasks = this.todoService.getTasks();
  }

  deleteTask(index: number) {
    this.todoService.deleteTask(index);
    this.tasks = this.todoService.getTasks();
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
