
/**
 * 2.Find filter findIndex
 * ---------------------------
 */
// Filter
//-----------
//filter() মেথড একটি নতুন array তৈরি করে যেখানে শুধুমাত্র সেই এলিমেন্টগুলো থাকে যেগুলো নির্দিষ্ট শর্ত পূরণ করে। এটি মূল array পরিবর্তন করে না।
// It works with an array 
// return an array 
// results depends based on condition written inside callback function 
// must return from the call back function 
// doesn't mutate the original array


// let arr = [1, 2, 3, 4];

// let result = arr.filter( (elm) =>  elm % 2 === 0);

// console.log(result); // [, 4]
// console.log(arr); //[1, 2, 3, 4];

// let numbers = [1, 2, 3, 4, 5];

// // ৩ এর চেয়ে বড় সব সংখ্যা ফিল্টার করা
// let filtered = numbers.filter(function(num) {
//     return num > 3;
// });

// console.log(filtered);  // Output: [4, 5]



/**
 * 2.Find 
 * ---------------------------
 * find() মেথড array এর মধ্যে থেকে প্রথম এলিমেন্ট খুঁজে বের করে, যেটি নির্দিষ্ট শর্ত পূরণ করে। এটি শুধু প্রথম ম্যাচিং এলিমেন্ট রিটার্ন করে।
 */

// It works with an array 
// return a value based on condition
// results depends based on condition written inside callback function 
// must return from the call back function 
// doesn't mutate the original array


// let arr = [1, 2, 3, 4];

// let result = arr.find( (elm) =>  elm % 2 === 0);

// console.log(result);
// console.log(arr);

// let numbers = [1, 2, 3, 4, 5];


// let numbers = [1, 2, 3, 4, 5];


// let found = numbers.find(function(num) {
//     return num > 3;
// });

// console.log(found);  // Output: 4



/**
 * 2.findIndex
 * ---------------------------
 * findIndex() মেথড array এর প্রথম সেই এলিমেন্টের index রিটার্ন করে যেটি নির্দিষ্ট শর্ত পূরণ করে। যদি কোনো এলিমেন্ট শর্ত পূরণ না করে, তাহলে এটি -1 রিটার্ন করে।
 */

// It works with an array 
// return an index based on condition
// results depends based on condition written inside callback function 
// must return from the call back function 
// doesn't mutate the original array


// let arr = [1, 2, 3, 4];

// let result = arr.findIndex( (elm) =>  elm % 2 === 0);

// console.log(result);
// console.log(arr);

// let numbers = [1, 2, 3, 4, 5];


// let index = numbers.findIndex(function(num) {
//     return num > 3;
// });

// console.log(index);  // Output: 3 (4 এর index)
