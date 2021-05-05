const  os = require('os');
const colors = require('colors');
const op = require('./Math');

const c = new op();

// Assignment_1(a)
console.log(`OS Hostname = ${os.hostname()}`);
console.log(`OS Platform = ${os.platform()}`);

// Assignment_1(b)
console.log(`Welcome to Node JS`.rainbow);

// Assignment_1(c)
console.log(`Add = ${c.Addition(6,7)}`);
console.log(`Subtract = ${c.Subtraction(6,7)}`);
console.log(`Multiply = ${c.Multiplication(6,7)}`);
console.log(`Divide = ${c.Division(6,7)}`);

// Assignment_1(d)
for(var i=5;i>0;i--){
setTimeout(printVal,3000);
}


function printVal(){
    console.log(`Welcome to Node JS`);
}