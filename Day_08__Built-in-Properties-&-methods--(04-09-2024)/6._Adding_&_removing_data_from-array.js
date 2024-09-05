/**
 * Array in JSON.stringify(
 * );
 */

const arr = [2, 3, 4,5 ,6 ,7];

console.log(arr.length);  // start 1
console.log(arr[2]); // index start 0

// Adding element at the end of the array
arr.push(5);
console.log(arr); //

// remove element from the end of array
arr.pop();
console.log(arr); // remove 5

// adding element at the beginning of the array
arr.unshift(1);
console.log(arr)

// remove element from the beginning of the array
arr.shift();
console.log(arr);


// Array last index access dynamically access
console.log(arr[arr.length - 1]);