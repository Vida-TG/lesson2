import fetch from "node-fetch";

async function fetchTodo() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await data.json()
        return todos;
    } catch(err) {
        console.log("An error occured");
        return null;
    }
}

async function showTodos() {
    const todos = await fetchTodo();
    if(todos){
        console.log(todos.splice(0, 5))
    } else {
        console.log("There is no todo")
    }
}

showTodos()