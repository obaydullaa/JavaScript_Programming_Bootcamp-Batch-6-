/**
 * 1.understanding scope
 * ------------------------------
 *  scope (existence of world of data)
 * 
 *  global scope => outside of function or block
 *  function scope => inside the function 
 *  block scope => {} 
 * 
 */


// var/ let, const   

const a = 10;
let b;

function myFunc() {
   return b = 50;
    console.log(a)
}
myFunc()
console.log(b)


if(true) {
    const c = 30;
    console.log(a)
    // console.log(b) // not possible its only access function scope; 
}

console.log(a)
// console.log(c) 