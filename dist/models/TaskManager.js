let date = new Date();

export class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addNewTask(title) {
        const newTask = {
            id: this.tasks.length + 1,
            title: title,
            date: date,
            completed: false
        };
        this.tasks.push(newTask);
    }
}
