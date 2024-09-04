/**
 * Javascript Built in properties and methods
 */

// const str = 'Hello How are you';

// console.log(str.length);  // 14
// console.log(str.toUpperCase()); 
// console.log(str.toLowerCase()); 
// console.log(str.indexOf('l'));  
// console.log(str.lastIndexOf('l'));  

// // Space remove start and end
// let trimString = str.trim() 
// console.log(trimString.length);

// // Space remove start 
// let trimStringStart = str.trimStart()
// console.log(trimStringStart.length);

// // Space remove end
// let trimStringEnd = str.trimEnd()
// console.log(trimStringEnd.length);

// console.log(str.trim());  

// // check in str variable 
// console.log(str.includes('Hello')); // true

// // check start
// console.log(str.startsWith('Hello')); // true

// // check end 
// console.log(str.endsWith('you')); // true


//***  Slice 
//==============================================
// // Slice not modify original data (array or string no matter) it't duplicate then slice
// // add 1 with index then we get exact result


const str = 'Hello Wold';

// console.log(str.slice(0, 5)); // Hello  //
// console.log(str.slice(6, 10)); // wold
// console.log(str.slice(-4, -2)); // wold
console.log(str.slice(6, 2)); // wold


//***  substring 
//==============================================
// substring work like slice but substring different behave for (-) negative number 
// const str = 'Hello Wold';

console.log(str.substring(0, 5)); //
console.log(str.substring(-5, 5)); //
// 6, 2 revers kore dise
console.log(str.substring(6, 2)); // llo  


/**
 * slice Vs substring
 *  1. slice start number big hole end number small hole empty string dai but substring revers kore kaj kore.
 * 1. slice a negative number kaj kore but substring  negative number zero doe kaj kore
 */