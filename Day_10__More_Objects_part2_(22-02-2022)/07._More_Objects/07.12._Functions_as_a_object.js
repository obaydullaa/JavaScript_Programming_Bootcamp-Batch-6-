/**
 * 7.12.Functions as a object
 */

/**
 * 2 Data type in javaScript
 * 1. Premitive 2. Reference => i. Objecr ii. Funcrion iii. array
 */

// example: 01 

function sayHi() {
    console.log('Hi');
}

sayHi.firstName = 'obaydul';
sayHi.lasttName = 'obaydul';

sayHi();


// example: 02

function greet() {
    console.log('Hi');
}

greet.name = 'function';
console.log(greet.name)


greet();

console.log(typeof greet)
console.log(greet instanceof Object)


let body = "return 'Hi' ";

let funcAsObj = new Function('greet', body )

console.log(funcAsObj())