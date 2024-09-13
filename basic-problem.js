/**
 * Date: 13 september 2024
 * 
 * Here is a list of JavaScript basic problems 
 */


/**
 * Problem 01: 
 * 
 *  Write a function that takes two numbers and returns their sum.
 * 
 */


function sum(a, b) {
    return a + b;
}

console.log(sum(5, 5));



/**
 * Problem 02: 
 * 
 *  Write a function that checks if a number is even or odd.
 * 
 */

function evenOrOdd(num) {
    if(num % 2 == 0) {
        return `This number ${num} is Even`;
    } else {
        return `This number ${num} is Odd`;

    }
}

console.log(evenOrOdd(5))