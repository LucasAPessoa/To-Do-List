import { TaskManager } from "./models/TaskManager";

const taskManager = new TaskManager()

const btn: HTMLElement = document.getElementById("btn")!
const title: HTMLElement = document.getElementById("title")!

function addNewTask(){
   
    taskManager.addNewTask(title.innerText)
  
}

if (btn) {
    btn.addEventListener("click", () => {
      console.log("Button clicked!");
    });
  }