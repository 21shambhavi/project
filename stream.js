const fs=require('fs');
const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{
   // fs.readFile('asyncfile/read.txt',"utf-8",(err,data)=>{
    //    res.end(data.toString());
   // });
  const stream=fs.createReadStream('asyncfile/read.txt');
 /*  stream.on("data",(chunkdata)=>{
       res.write(chunkdata);
   });
   stream.on("end",()=>{
       res.end();
   })
   stream.on('error',(err)=>{
       console.log(err);
       res.end('file not found')
   });*/
   stream.pipe(res);
});
server.listen(8000,"127.0.0.1");