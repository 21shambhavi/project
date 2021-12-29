const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res) => {
    const data=fs.readFileSync("api.json","utf-8");
    //console.log(req.url);
    if(req.url=="/"){
    res.end('hello');
    }
    else if(req.url=="/userapi")
    {
        res.writeHead(200,{"content-type":"application/json"});
       // fs.readFile("api.json","utf-8",(err,data) =>{
            res.end(data)
        //});
    }
    else if(req.url=="/aboutus")
    {
        res.end("hello from")
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>doesn't exist</h1>");
    }
})
server.listen(8000,"127.0.0.1", () =>{
    console.log("listen");
});