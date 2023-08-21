const http = require("http")

const consoleHi = (name) => {
    console.log(`Hi ${name}`)
}

const consoleHi2 = () => {
    console.log("Hi")
}

module.exports = { consoleHi, consoleHi2 };