/**
 * 9.IIFE = Immediately-Invoked function expression 
 * ------------------------------
 */
// don't use global scope 

//own package


;(function print() {
  let num1 = 10;
  let num2 = 20;   
  console.log(num1 + num2); 
})();


num1 = 30;

console.log(num1)