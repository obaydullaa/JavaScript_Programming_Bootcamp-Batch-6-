/* 
Comples Data Type OR Reference Type Data

1. Array 
2. Function 
3. Object

1. Array : Grouping of related data

2. Function 
3. Object

*/

let myAbout = ['Obaydul ', 'Islam', 24, 'Student']

myAbout[3] = 'Js Lover';

console.log(myAbout[0]) // Obaydul
console.log(myAbout[0] + myAbout[1]) // Obaydul Islam
console.log(myAbout[3]) // Js Lover

let myAbout1 = ['Obaydul ', 'Islam', 24, 'Student']

myAbout1[3] = false;

console.log(myAbout1); // 'Obaydul ', 'Islam', 24, 'false

// We can initialize empty array two ways
let arrayWaye1 = [];
let arrayWaye2 = new Array(); // Uncommon

// array can hold any type Data
let arrayWaye3 = ['Obaydul', 24, false, Boolean, null];

// Arrays have a length property
const num = [12, 4, 5, 6];
console.log(num.length) // 4