/**
 * 7.7.Binding “this” in JavaScript
 */

function sayHi(age, profession) {
    // console.log(this);
    return (`Hi ${this} You are ${age}. You are a ${profession} `);
}


const sayHiAfterBinding = sayHi.bind('Obaydul');
const outputCall = sayHiAfterBinding.call(undefined, 24, 'Web Devewloper');
const outputApply = sayHiAfterBinding.apply(undefined, [24, 'Web Devewloper']);


console.log(outputCall);
console.log(outputApply);