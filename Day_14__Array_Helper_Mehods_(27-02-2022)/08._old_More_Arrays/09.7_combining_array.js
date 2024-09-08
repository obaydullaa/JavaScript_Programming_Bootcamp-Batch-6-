/**
 * 09.7_combining array
 */

/**
 * We can join array by (.concat)
 * It better and right way it's come Es6 ;
 */

const num1 = [2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

// const rejult = num1.concat(num2); 

const combined = [...num1, ...num2] // We can use spread operator (It will be flad)

console.log(combined);