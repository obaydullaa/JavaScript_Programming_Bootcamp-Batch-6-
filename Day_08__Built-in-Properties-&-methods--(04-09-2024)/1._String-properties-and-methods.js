/**
 * Javascript Built in properties and methods
 */

const str = 'Hello How are you';

console.log(str.length);  // 14
console.log(str.toUpperCase()); 
console.log(str.toLowerCase()); 
console.log(str.indexOf('l'));  
console.log(str.lastIndexOf('l'));  

// Space remove start and end
let trimString = str.trim() 
console.log(trimString.length);

// Space remove start 
let trimStringStart = str.trimStart()
console.log(trimStringStart.length);

// Space remove end
let trimStringEnd = str.trimEnd()
console.log(trimStringEnd.length);

console.log(str.trim());  

// check in str variable 
console.log(str.includes('Hello')); // true

// check start
console.log(str.startsWith('Hello')); // true

// check end 
console.log(str.endsWith('you')); // true