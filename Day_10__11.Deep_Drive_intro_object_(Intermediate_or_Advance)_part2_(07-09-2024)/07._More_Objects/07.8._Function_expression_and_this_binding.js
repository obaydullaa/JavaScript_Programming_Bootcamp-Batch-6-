/**
 * 7.8.Function expression and this binding
 */

//  //Function statement
//  function sayHi(age, profession) {
//     // console.log(this);
//     return (`Hi ${this} You are ${age}. You are a ${profession} `);
// }

// Function expression
const sayHi = function(age, profession) {
    return (`Hi ${this} You are ${age}. You are a ${profession} `);
}.bind('Obaydul');


const outputCall = sayHi.call(undefined, 24, 'Web Devewloper');
const outputApply = sayHi.apply(undefined, [24, 'Web Devewloper']);


console.log(outputCall);
console.log(outputApply);