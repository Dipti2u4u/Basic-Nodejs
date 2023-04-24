//here we need to read the data from input.txt file(Without using stream)

const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request" , (req,res) => {
    fs.readFile("input.txt" , (err,data) =>{
        res.end(data.toString());
    })
})

server.listen(8000 , () => {
    console.log("server is listening to the port 8000")
})

