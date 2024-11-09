import { TaskManager } from "./models/TaskManager.js";

const taskManager = new TaskManager();

const btn = document.getElementById("btn");
const title = document.getElementById("title");

function addNewTask() {
    taskManager.addNewTask(title.innerText);
}
if (btn) {
    btn.addEventListener("click", () => {
        console.log("Button clicked!");
    });
}
