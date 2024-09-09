/**
 * 2.scope rules-var
 * ------------------------------
 *  scope (existence of world of data)
 * 
 */


// var 
// global scope => outside of function 
// function scope => inside the function 

const a = 10;
let b;
var d = 20;

function myFunc() {
    console.log(d)
   return b = 50;
}
myFunc()
console.log(b)

for(let i = 0; i < 10; i++) {
   console.log(d)
    console.log(i)
}

