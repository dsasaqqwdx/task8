import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  description?: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.save();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.save();
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.save();
  }

  private save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
