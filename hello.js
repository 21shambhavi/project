//E:\nodejs>node hello.js
console.log("Hello World");//Hello World
console.log(__filename);//gives location of file with file name(E:\nodejs\hello.js)
console.log(__dirname); // gives location of file(E:\nodejs)
//by passing function name
function print(){
    console.log("Time passed");//Time passed
}
setTimeout(print,5000);
//by using anonymous function
var temp=setTimeout(function() {
    console.log("Time is passing")//Time is passing
}, 3000);
console.log(temp)
/*Timeout {
  _idleTimeout: 3000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 146,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 6,
  [Symbol(triggerId)]: 1
}*/
var interval=setInterval(function(){
    console.log("using setinterval")//using setinterval using setinterval(infinite times)
}, 2000);
setTimeout(function() {
clearInterval(interval);},5000); 
//function keyword
function add(a,b)
{
    return a+b;
}
console.log(add(2,4));
//using function expression
var fun=function(){
    console.log("hello");
}
fun();
//importing module
const sum=(a,b) => {
    return a+b;
};
const diff=(a,b) =>{
    return a-b;
};
//module.exports.sum=sum;
//module.exports.diff=diff;
module.exports={sum,diff};