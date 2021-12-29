const fs=require('fs')
const biodata={
    name : "Sham",
    age : 20,

};
//console.log(biodata.name);
const json=JSON.stringify(biodata)
console.log(json);
const nordata=JSON.parse(json)
console.log(nordata);
//fs.writeFile("json.json",json,(err) =>{
  //  console.log("done");
//});
fs.readFile("json.json", "UTF-8",(err, data) =>{
    const ndata=JSON.parse(json)
    console.log(data);
    console.log(ndata)
});    