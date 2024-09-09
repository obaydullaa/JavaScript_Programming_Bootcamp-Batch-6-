/**
 * 7.Introduction to hoisting 
 * ------------------------------
 *  Hoisting (lifting Up)
 */

console.log(a);
var a = 10;
console.log(a);
console.log(greet());

//Function statement 
function greet() {
  return 'Hi';
}

console.log(anotherGreet());
// Function expression
const anotherGreet = ()  => {
  return 'Hello';
}

console.log(anotherGreet());

// creation phase
//-----------------
// Initializing Variable (variable value won't set)
// variable value set to undefined 
// function statement declaration taken into the memory 



// Execution phase 
//--------------------
// variable value assignment 
// all call 



// Function gotcha 


// line by line read 
//-------------------------

// creation pash 
// ..... 
// var a =  undefined 
// .... 
// .... 
// function greet() {
  // return 'Hi';
// }
// ....  
// var anotherGreet = undefined; 
// ....

//// execution pash 
// console.log(a)  // undefined
// a = 10;
// console.log(a) // 10
// console.log(greet()) // Hi 
// console.log(anotherGreet()) // error
// const anotherGreet = ()  => {
//   return 'Hello';
// }
// console.log(anotherGreet()); // hello 