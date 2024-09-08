
/**
 * 3.Every and some
 * ---------------------------
 */
// some
//-----------
//some() মেথড array এর এলিমেন্টগুলোর মধ্যে কমপক্ষে একটি এলিমেন্ট নির্দিষ্ট শর্ত পূরণ করছে কিনা তা চেক করে।
//  যদি কমপক্ষে একটি এলিমেন্ট শর্ত পূরণ করে, তবে এটি true রিটার্ন করে, না হলে false রিটার্ন করে।

// It works with an array 
// return an boolean (true and false)  based on condition
// returns true if any element of the array match the condition
// results depends based on condition written inside callback function 
// must return from the call back function 
// doesn't mutate the original array


// let arr = [1, 2, 3, 4];

// let result = arr.some( (elm) =>  elm % 2 === 0);

// console.log(result); // true

// let numbers = [1, 2, 3, 4, 5];


// let hasLargeNumber = numbers.some(function(num) {
//     return num > 4;
// });

// console.log(hasLargeNumber);  // Output: true



// every
//-----------
// every() মেথড array এর সবগুলো এলিমেন্ট নির্দিষ্ট শর্ত পূরণ করছে কিনা তা চেক করে। 
// যদি সব এলিমেন্ট শর্ত পূরণ করে, তবে এটি true রিটার্ন করে, না হলে false।

// It works with an array 
// return an boolean (true and false)  based on condition
// returns true if every element of the array match the condition
// results depends based on condition written inside callback function 
// must return from the call back function 
// doesn't mutate the original array

// let arr = [1, 2, 3, 4];

// let result = arr.every( (elm) =>  elm % 2 === 0);
// console.log(result); // false

// let numbers = [1, 2, 3, 4, 5];

// let allAreSmall = numbers.every(function(num) {
//     return num < 6;
// });

// console.log(allAreSmall);  // Output: true
