/**
 * 11.Exercise
 */

/**
 * Exercise- 01
 ===================
    Extercise - 1 (Wht will be the result and explain why ?)
    Ans: It will be rejult true because OR(||) Operator work exicute hold the
*/
// const x = 10;
// const y = 'a';

// console.log(y === 'b' || x >= 10) // true
/**
 * Exercise - 02 (what will be the result and explain why ?)
 * Ans: It is true because AND(&&) operator find any false return false and if all true or false then return  ture or false
 */

let x = 2;
let y = 'a';

console.log(!(x == '3' || x === y) && !(y != 8 && x <= y)); // true


/**
 * Exercuse - 03 (Get the boolean value)
 =================================================
 And: It Return boolean value Because  this is negative value return
    !'Hello World'
    !""
    !null
    !0
    !-1

 */
console.log(!'helloworld');
console.log(!'');

/**
 * Excercise - 4 (What will be the result and ecplain why ?)
 * Ans: It's return flase becase it's both side return false;
    let str = ''
    let msg = 'haha'
    let isFunny = 'false

    !((str || msg) && isFunny)
 */

let str = '';
let msg = 'haha';
let isFunny = 'false';

console.log(!((str || msg) && isFunny)) //false