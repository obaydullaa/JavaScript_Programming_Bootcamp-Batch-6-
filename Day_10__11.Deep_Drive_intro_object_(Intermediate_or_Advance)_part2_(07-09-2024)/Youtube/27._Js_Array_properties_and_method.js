/**
 * 27.Javascript Array properties and method
 */
const arr = ['I', 'Love', 'Programming'];

// Finding length
console.log(arr.length);

// Accessing specific element
console.log(arr[0]);

// Adding or removing element at the end of the array
console.log(arr.push('!'));
console.log(arr.pop('!'));

console.log(arr);

// Adding or removing element at the beginning of the array

// console.log(arr.unshift('!')); // unshift() change Orginal array
// console.log(arr.shift('!'));

console.log(arr);

// Accessing specific part of arry
console.log(arr.slice(1, 3)); // slice() Don't change orginial array

// console.log(arr.splice(0, 2)); // splice() change orginial array
// console.log(arr.splice(0, 2)); // splice() change orginial array
console.log(arr.concat('!')); // // concat() Don't change Orginal array return new array and add new Element

console.log(arr);

// Emptying array

arr.length = 0;

console.log(arr);