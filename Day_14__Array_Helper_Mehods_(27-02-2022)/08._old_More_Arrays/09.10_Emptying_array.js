/**
 * 099.10_Emptying array
 */

/**
 *   If we don't give reference then we use  empty array ( [] ) Otherwise array.length = 0 will be.
 */

let numbers = [1, 3, 5, 7, 10];
const anotherNumbers = numbers;
// numbers = [] 


numbers.length = 0;

console.log(numbers);
console.log(anotherNumbers);