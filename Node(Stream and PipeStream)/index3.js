//Hre we will use pipestream where 24 lines of code of index2.js willbe reduced


const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request" , (req,res) => {
   const rstream = fs.createReadStream("input.txt");
   rstream.pipe(res);
})

server.listen(8000 , () => {
    console.log("server is listening to the port 8000")
})