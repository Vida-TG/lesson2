let tasks = [];

const addTasks = (task) => {
    tasks.push(task);
}

function showTasks(){
    console.log(tasks)
}

module.exports = {addTasks, showTasks}