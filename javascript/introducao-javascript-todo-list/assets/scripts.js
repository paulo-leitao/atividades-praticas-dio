let tasks = document.getElementById("tasks");
let c = document.getElementById("task-btn");
let task = document.getElementById("new-task");

c.addEventListener("click", addToList, false);

function addToList () {
    // console.log(task.value);

    if ( task.value != "") {

        let taskContainer = document.createElement('div');
        let newTask = document.createElement('input');
        let newLabel = document.createElement('label');
        let description = document.createTextNode(task.value);
        
        newTask.setAttribute('type','checkbox');
        newTask.setAttribute('name', task.value);
        newTask.setAttribute('id', task.value);
        
        newLabel.setAttribute('for', task.value);
        newLabel.appendChild(description);
        
        taskContainer.classList.add('task-item');
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(newLabel);
        
        tasks.appendChild(taskContainer);
        task.value = "";
    
    } else {
        console.log("Campo vazio");
    }

}

