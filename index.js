const http = require("http")

http.createServer(function (req, res) {
    console.log("Server responding");
    res.write("Tutorial MLSA");
    res.end()


}).listen(8000)
