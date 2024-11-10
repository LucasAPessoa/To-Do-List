import { TaskManager } from "./models/TaskManager";

const taskManager = new TaskManager()

const addBtn: HTMLElement = document.getElementById("btn")!
const title = document.getElementById("title")! as HTMLInputElement

//Function to add a new task
function addNewTask(){

  //Verify if the value of title is null
  if(title.value === ""){
    console.log("É preciso adicionar um título")
  }
  //If title is not null, add the new task and show all tasks in console
  else{    
    taskManager.addNewTask(title.value);
    console.log(taskManager.getTasks());
  }
  
}

//Add a click event for the add a task button
if (addBtn) {
    addBtn.addEventListener("click", () => addNewTask());
  }