let todos = [];

function addTask(task) {
    todos.push(task);
}

function viewTasks() {
    console.log(todos);
}

function updateTask(index, newTask) {
    if (index >= 0 && index < todos.length) {
        todos[index] = newTask;
    }
}

function deleteTask(index) {
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
    }
}

addTask("Learn JavaScript");
addTask("Complete Assignment");
viewTasks();

updateTask(0, "Master JavaScript");
viewTasks();

deleteTask(1);
viewTasks();