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
            completed: false,
        };
        this.tasks.push(newTask);
    }
    getTasks() {
        return this.tasks;
    }
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }
    completeTask(id) {
        const selectedTask = this.tasks.find((task) => task.id === id);
        if (selectedTask) {
            selectedTask.completed = true;
            return true;
        }
        return false;
    }
    uncompleteTask(id) {
        const selectedTask = this.tasks.find((task) => task.id === id);
        if (selectedTask) {
            selectedTask.completed = false;
            return false;
        }
        return true;
    }
}
