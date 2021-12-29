//asynchronous file
//for async file we have to call a callback function
//we have to use async version because agar koi request ko hone mein 10 sec lg rha h to wo wait nhi krta h wo dusra chiz execute kr deta h sync versiopn mein ek hone ke baad hi dusra execute krta h
const fs=require('fs');
fs.writeFile('read.txt','hello my name is shambhavi', (err) =>{
    console.log('file is created');
    console.log(err);
});