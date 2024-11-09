import { Task } from "../interfaces/Task";

let date = new Date();
export class TaskManager {
  private tasks: Task[] = [];

  addNewTask(title: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: title,
      date: date,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(id: number): boolean {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      return true;
    }
    return false;
  }
}
