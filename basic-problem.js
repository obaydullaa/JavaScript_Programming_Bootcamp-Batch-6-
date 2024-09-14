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




/**
 * Problem 03: 
 * 
 *  Write a function that takes three numbers and returns the largest.
 * 
 */



// function largestNumber(a, b, c) {
//     return Math.max(a, b, c);
// }
// console.log(largestNumber(9, 4, 6));



// // Define the array
// let arr = [1, 4, 6, 130, 14, 150];

// let larGestNumber = [0];

// for(let i = 1; i <arr.length; i++) {
//     if(arr[i] > larGestNumber) {
//         larGestNumber = arr[i]
//     }
// }

// console.log(larGestNumber)

let arr = [1, 4, 6, 130, 14, 15];

// Step 1: Find the largest number
let largest = arr[0];
let secondLargest = Infinity; // Initialize with a very small value

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest; // Previous largest becomes second largest
        
        largest = arr[i];        // New largest is found
    } 
    if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log('Largest number:', largest);
console.log('Second largest number:', secondLargest);


