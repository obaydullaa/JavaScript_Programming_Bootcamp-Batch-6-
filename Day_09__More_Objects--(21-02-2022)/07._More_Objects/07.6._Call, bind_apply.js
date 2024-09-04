/**
 * 7.6.Call, bind, apply
 */

//01. This inside method = object
//02. This in a constructor function some kimd of object
//03. Otherwise -always indicate window

function sayHi(age, profession) {
    // console.log(this);
    return (`Hi ${this} You are ${age}. You are a ${profession} `);
}

// sayHi()
const sayHiAfterBinding = sayHi.bind('Obaydul');
const outputCall = sayHiAfterBinding.call(undefined, 24, 'Web Devewloper');
const outputApply = sayHiAfterBinding.apply(undefined, [24, 'Web Devewloper']);


console.log(outputCall);
console.log(outputApply);