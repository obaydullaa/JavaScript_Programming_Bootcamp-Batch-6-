/**
 * 3.Introduction to First Class Function
 * -------------------------------------------------
 * 
 * // function is  considered a like any other data 
 * // characteristics of data 
 * // can be assigned to the right side of the variable
 * // Can be passed as function 
 * // can be returned from 
 * // First class function functionName (parameters)
 * 
 */

let a = 10;
console.log(a);

let b = a;
console.log(b);

function printNum(num) {
    return num;
}

console.log(printNum(a));