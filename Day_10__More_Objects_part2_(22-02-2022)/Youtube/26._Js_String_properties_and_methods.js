/**
 * 26.Javascript String properties and methods
 */

const text = 'I Love Programming';

// Finding length
console.log(text.length);

// Finding character / Element
console.log(text[0]);

// finding Character by index
console.log(text.charAt(5));

//finding index by character
console.log(text.indexOf('e'))

// Upperrcase
console.log(text.toUpperCase())

// Lowercase
console.log(text.toLowerCase())

// check whether text is inclided or not > inclides is case sensetive
console.log(text.includes('i'))

// Remove space 
console.log(text.trimStart().length);
console.log(text.trimEnd().length);
console.log(text.trim().length);

// Putting out text
console.log(text.slice(0, 6));
console.log(text.substr(0, 6));

//Concat
console.log(text.concat(' !'));

//converting / crating array from a string

console.log(text.split(' '));