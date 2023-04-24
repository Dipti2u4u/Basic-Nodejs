//To create a server we need http module
const http = require("http");

//getting the response from the server
const server = http.createServer((req , res) => {
    res.end("Hii from server");
});

//sending the request to the server

server.listen(8000, () => {
    console.log("listening the port number 8000");
})