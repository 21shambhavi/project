const http=require('http');
const fs=require('fs');
var requests = require('requests');
const homefile=fs.readFileSync('home.html',"utf-8");
const replaceval=(tempval,orval)=>{
    let temperature=tempval.replace("{%tempval%}",orval.main.temp);
    temperature=temperature.replace("{%tempmin%}",orval.main.temp_min);
    temperature=temperature.replace("{%tempmax%}",orval.main.temp_max);
    temperature=temperature.replace("{%location%}",orval.name);
    temperature=temperature.replace("{%country%}",orval.sys.country);
    temperature=temperature.replace("{%clouds%}",orval.weather[0].main);
    return temperature;
}
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        requests('http://api.openweathermap.org/data/2.5/weather?q=gorakhpur&appid=36039e4db533c7c4393731a1ddfa1f91')
.on('data',(chunk) =>{
    const ondata=JSON.parse(chunk);
    const arr=[ondata];
    const realtimedata=arr.map(val=>replaceval(homefile,val)).join("");
    res.write(realtimedata);
})
  //console.log(arr[0].main.temp);
.on('end', (err) => {
  if (err) return console.log('connection closed due to errors', err);
 res.end();
  console.log('end');
});
    }
});
server.listen(8000,"127.0.0.1");