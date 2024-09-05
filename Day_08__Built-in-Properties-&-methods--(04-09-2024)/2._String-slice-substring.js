/**
 * Slice 
 *  * slice() মেথডটি array বা string-এর একটি নির্দিষ্ট অংশ কেটে নিয়ে নতুন array বা string তৈরি করে। 
 * এটি মূল array বা string-কে পরিবর্তন করে না, শুধু নির্দিষ্ট অংশ নেয়।
 * 
    Positive index: 0 থেকে শুরু করে সামনের দিকে গোনা হয়।
    Negative index: array বা string এর শেষ থেকে গোনা শুরু হয়।
 */

const str = 'Hello world';
// slice 
console.log(str.slice(0, 5));
console.log(str.slice(6, 8));
console.log(str.slice());
console.log(str.slice(-5, -2));
console.log(str.slice(-3, -2));


let fruits = ['apple', 'banana', 'cherry', 'mango', 'orange'];

// slice with positive values
let result1 = fruits.slice(1, 3); // Start from index 1, end before index 3
console.log(result1); // Output: ['banana', 'cherry']

// slice with negative values
let result2 = fruits.slice(-3, -1); // Start from index -3 (mango), end before -1 (orange)
console.log(result2); // Output: ['cherry', 'mango']

// মাইনাস ভ্যালু দিয়ে index এর হিসাব:
// Index	Value	Negative Index

// 0	    'apple'	          -5
// 1	    'banana'	      -4
// 2	    'cherry'	      -3
// 3	    'mango'	          -2
// 4	    'orange'	      -1

// slice(-3, -1):
// এখানে -3 থেকে শুরু মানে 'cherry' (index 2), কারণ মাইনাস দিয়ে শেষ থেকে গোনা হচ্ছে।
// -1 এর আগ পর্যন্ত কাটা হবে, অর্থাৎ 'orange' এর আগের পর্যন্ত কাটা হবে, ফলে 'cherry' এবং 'mango' পাওয়া যাবে।



let numbers = [10, 20, 30, 40, 50, 60];

// Slice with negative start and positive end
let result = numbers.slice(-4, 5); // Start from index -4 (30), end before index 5
console.log(result); // Output: [30, 40, 50]
