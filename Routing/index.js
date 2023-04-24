const http = require("http");
const server = http.createServer((req,res) => {
    //res.end(req.url);

    if(req.url === "/"){
        res.writeHead(200, {"content-type" : "text/plain"});
        res.end("Home page");
    }else if(req.url === "/About"){
        res.writeHead(200, {"content-type" : "text/plain"});
        res.end("AboutUs page");
    }else if(req.url === "/Contact"){
        res.writeHead(200, {"content-type" : "text/plain"});
        res.end("ContactUs page"); 
    }else {
        res.writeHead(404);
        res.end("page not found");
    } 
});

server.listen(8000,() => {
    console.log("server is listening to port 8000 ");
})