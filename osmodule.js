const os=require('os');
const freemem=os.freemem();
console.log(freemem /1024/1024/1024);
console.log(os.homedir());
console.log(os.arch());