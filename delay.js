
const delay = (sec) => {
    //const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const start = Date.now()
    while(Date.now - start < sec){
        
    }
}

async function task1 () {
    console.log("Started task1")
    await delay(3000)
    console.log("Ended task1")
}
const task2 = async () => {
    console.log("Started task2")
    await delay(100)
    console.log("Ended task2")
}

task1()
task2()
console.log("After tasks")