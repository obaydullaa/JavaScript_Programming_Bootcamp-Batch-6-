
/**
 * 10. Array helper utility =>  Array.Form & Array.of 
 *----------------------------

 */

 // Array.Form 
 //Array.from() একটি array-like (যেমন string, NodeList, বা Set) বা iterable object (যেমন Map বা arguments) কে প্রকৃত array তে রূপান্তর করে। 
//  এটি বিশেষ করে উপকারী যখন তোমার কাছে একটি array-like object থাকে এবং সেটিকে array হিসাবে ব্যবহার করতে চাও।

//  let arr = [1, 2, 3, 4]

// function printNumb() {
//   console.log( typeof arguments)
//   console.log(Array.isArray(arguments))
//   // Convert Real to Array 
//   let arr = Array.from(arguments)

//   console.log( Array.isArray(arr))
// }
// printNumb(1, 2, 3, 4);
// let stringToArray = Array.from('Hello');
// console.log(stringToArray);  // Output: ['H', 'e', 'l', 'l', 'o']



 // Array.of 
//  let array = Array.of(2, 3, 4, 5, 6)
// Array.of() হলো একটি মেথড যা যেকোনো সংখ্যা বা এলিমেন্ট নিয়ে একটি array তৈরি করে। এটি array literals এর মতো কাজ করে, তবে একটি গুরুত্বপূর্ণ পার্থক্য হলো, যদি শুধু একটি সংখ্যা পাস করা হয়, তা হলে এটিকে সংখ্যা হিসেবে নেয় এবং তা একটি array এর মধ্যে রাখে, যেখানে new Array() এটা একটি নির্দিষ্ট সাইজের array তৈরি করে।
//  let array = new Array(2)

//  console.log(array)

//  let singleElementArray = Array.of(7);
// console.log(singleElementArray);  // Output: [7]

// let multipleElementsArray = Array.of(1, 2, 3, 4);
// console.log(multipleElementsArray);  // Output: [1, 2, 3, 4]
