import fs from "fs"

fs.writeFile("happy.js", "I am happy", (err) => {
    if (err) {
        console.log("Error")
    }
})
//fs.writeFileSync("syncHappy.js", "Sync file written")
fs.readFile("happy.js", 'utf-8', (error, data) => {
    if(error) {
        console.log("Error")
    } else {
        console.log(data)
    }
})

fs.appendFile