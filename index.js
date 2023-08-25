const http = require("http")
const {addTasks, showTasks} = require("./controller")

addTasks("Wash Clothes");
addTasks("Code");
showTasks();

