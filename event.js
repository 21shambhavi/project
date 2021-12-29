const EventEmitter=require('events');// creating class
const event=new EventEmitter();// creating event emitter instance
event.on('saymyname',()=>{
    console.log("My name is Shmambhavi");
});
event.on('saymyname',()=>{
    console.log("My name is Sham");
});
event.on('saymyname',()=>{
    console.log("My name is isha");
});
event.on('checkPage',(sc,msg)=>{
    console.log("Status code is "+sc+" and the page is "+ msg);
});
event.emit("saymyname");
event.emit("checkPage",200,'ok')