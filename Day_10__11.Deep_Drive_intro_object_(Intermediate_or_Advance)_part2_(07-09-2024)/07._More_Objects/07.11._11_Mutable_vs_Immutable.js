/**
 * Mutable  // Can Modify 
 * Immutable // No modify
 * 
 */


// All primitives are immutable
 const name  = 'obaydulla';
 name[1] = 'H';
 console.log(name) 

//  Immutable // No modify
//object
// array

const arr = [1, 2, 3, 4, 5];
arr[1] = 'a';

const obj = {a: 1, b: 2, c: 3, d: 4}

obj[1] = 10;

console.log(obj);

console.log(arr)