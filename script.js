//alert('valeu vini');

//função que adiciona a tarefa
function addTask() {
    // tituli da tarefa
    const taskTitle = document.querySelector("#task-title").Value;

    if(taskTitle) {
        // clonar o template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);
        
        //adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover as classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });


        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn".addEventListener("click", function() {
            completeTask(this);
        });


        //limpar texto
        document.querySelector("#task-title").Value = "";
    }
{
}

//função de remover tarefa
function removeTask(task){
   task.parentNode.remove(true);
}

//função de completar tarefa
function completarTask(task); {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}

//evento de adicionar tarefa;
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();

});