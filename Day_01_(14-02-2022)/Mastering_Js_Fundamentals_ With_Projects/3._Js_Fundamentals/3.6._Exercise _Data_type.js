// Exercise  - Data Type

/*
    write down the data in a memory space and call them
    ==========================================================
    Karim is bad boy
    Karim is "bad" boy

    cheking the type and explain  your answer
    ================================================
    43
    '43'

    write you Bio
    ===========================
    I am shamim Hasan.I am 25.I'm a web developer.I love "Javascripr"
*/

// Fist Home Work

let manName = 'Karim is bad boy';

console.log(manName); // Karim is bad boy

manName = 'Karim is \"bad\" boy';

console.log(manName); // Karim is "bad" boy

// Secend Home Work

// 43 It's data type is number Because there is no quotation  that's why it's number Type data.

// Example:
console.log(typeof(43)); // number

// '43' It's data type is string Because there is quotation  that's why its number Type data.

// Example:
console.log(typeof('43')); // string

// Third Home work

let myName = 'I am Obaydullal.';
let myAge = 'I am 25.';
let myprof = 'I\'m wed developer.';
let mylove = 'I love \"Javascripr\"';

let result = myName + myAge + myprof + mylove;
console.log(result); // I am Obaydullal.I am 25.I'm wed developer.I love "Javascripr"