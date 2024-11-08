import { Task } from "../interfaces/Task";

let date = new Date()
export class TaskManager {
    private tasks: Task[] = [];

    addNewTask(title: string){
        const newTask: Task = {
            id: this.tasks.length + 1,
            title: title,
            date: date,
            completed: false
        }
        this.tasks.push(newTask)
    }


}