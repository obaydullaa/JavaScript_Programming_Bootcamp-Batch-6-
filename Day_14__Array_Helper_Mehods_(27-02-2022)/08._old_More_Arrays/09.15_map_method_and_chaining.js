u
/**
 * 09.15_map method and chaining
 */

/*
 Map method
 ------------------
 1. Must return something
 2. Result will be array

    * where is map() method important ?
    Ans:  Some kind list generate and we chan Es6 every method exam: map(), reduce() every() etc
 */


// let numbers = [1, 7, 3, 9];
// const result = numbers.map(number => number * 2);
// console.log(result); 

/**
 * We can join
 */
//  let numbers = [1, 7, 3, 9];
//  const result = numbers
//  .map(number => number * 2)
// //  .join(' ')
//  .reduce((a, b ) => a + b );

// Where is this important

const products = ['T-shirt', 'shoes'];
let ul = '<ul>';
const result = products
    .map(item => ul += ` <li> ${item}</li>`)
    .join(' ')
ul += '</ul>';

console.log(result);