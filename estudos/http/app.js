var http = require("http")

//como criar uma porta http
http.createServer(function(req,res){
    res.end("Hello world!cd")
}).listen(8081)

console.log("Rodando")