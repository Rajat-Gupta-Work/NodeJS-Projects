/*const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
const operator1 = parseInt(argv[1])
const operator2 = parseInt(argv[2])*/

const prompt = require('prompt-sync')();
const cal = require('./cal')

const name = prompt('What is your name? ');
console.log(`Hey there ${name}`);

const operation = prompt('Write operation (add, subtract, multiply, divide): ');

const operator1 = parseInt(prompt('Enter Num 1: '));
const operator2 = parseInt(prompt('Enter Num 2: '));
// hello

function calculator(operation, operator1, operator2){
    
    if (operation === 'add') {
    console.log(operation + ' is ' 
        + (operator1 + operator2));
    console.log(cal.add(operator1, operator2));
    }

    if (operation === 'subtract') {
    console.log(operation + ' is ' 
        + (operator1 - operator2));
        console.log(cal.sub(operator1, operator2));
    }

    if (operation === 'multiply') {
    console.log(operation + ' is ' 
        + (operator1 + operator2));
        console.log(cal.mul(operator1, operator2));
    }

    if (operation === 'divide') {
    console.log(operation + ' is ' 
        + (operator1 - operator2));
        console.log(cal.div(operator1, operator2));
    }
}


console.log(calculator(operation, operator1, operator2))

