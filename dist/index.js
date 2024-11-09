import { TaskManager } from "./models/TaskManager";
const taskManager = new TaskManager();
const btn = document.getElementById("btn");
const title = document.getElementById("title");
function addNewTask() {
    if (title.value === "") {
        console.log("É preciso adicionar um título");
    }
    else {
        taskManager.addNewTask(title.value);
        console.log(taskManager.getTasks());
    }
}
if (btn) {
    btn.addEventListener("click", () => addNewTask());
}
