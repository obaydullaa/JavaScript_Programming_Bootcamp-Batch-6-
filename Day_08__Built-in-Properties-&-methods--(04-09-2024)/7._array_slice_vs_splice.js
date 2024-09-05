/**
 * 
 * Array slice and split and splice
 * ========================================
 * slice() মেথডটি array বা string-এর একটি নির্দিষ্ট অংশ কেটে নিয়ে নতুন array বা string তৈরি করে। 
 * এটি মূল array বা string-কে পরিবর্তন করে না, শুধু নির্দিষ্ট অংশ নেয়।
 * slice() ব্যবহার করে যখন আমরা array বা string থেকে নির্দিষ্ট অংশ কেটে নিই, তখন আমরা শুরু এবং শেষের index প্রদান করি।
 * এখানে শুরু index থেকে কাটা শুরু হয় এবং শেষ index-এর আগ পর্যন্ত (excluding the end index) কাটা হয়।
 * 
 *split() 
=================================
 * split() একটি string-কে ভাগ করে array বানায়। তুমি যেকোনো character দিয়ে ভাগ করতে পারো, যেমন স্পেস, কমা, বা অন্য কিছু।
 * 
    slice() ও split() এর মধ্যে পার্থক্য:
    -----------------------------------
    slice(): এটি array বা string-এর একটি নির্দিষ্ট অংশ কেটে নিয়ে নতুন array বা string বানায়।
    split(): এটি শুধুমাত্র string নিয়ে কাজ করে এবং string-কে ভেঙে array বানায়।  প্রতিটি ভাগ array এর index অনুযায়ী সাজানো হয়।

    splice() 
    =============================
    splice() মেথডটি জাভাস্ক্রিপ্টে array-এ নতুন elements যোগ করতে, মুছে ফেলতে বা পরিবর্তন করতে ব্যবহার করা হয়। এটি মূল array-কে পরিবর্তন করে ফেলে এবং স্প্লাইস করা অংশ বা মুছে ফেলা অংশগুলো ফেরত দেয়।

    splice() মেথড এর Syntax:
    --------------------------
    array.splice(start, deleteCount, item1, item2, ...)

 */

// ===== slice =======
//// slice original array ke copy kore

const arr = [2, 3, 5, 6, 7];

console.log(arr.slice(0, 3)); 
console.log(arr.slice(2));
console.log(arr.slice(-5, -1));

let sentence = "I love playing football";
let words = sentence.split(' '); // This will split the sentence into words based on space (' ')
console.log(words); // Output: ['I', 'love', 'playing', 'football']

let names = "John,Paul,George,Ringo";
let splittedNames = names.split(','); // This will split the string at each comma
console.log(splittedNames); // Output: ['John', 'Paul', 'George', 'Ringo']

// slice() with array
let colors = ['red', 'green', 'blue', 'yellow', 'black'];
let slicedColors = colors.slice(2, 4); // It will cut from index 2 to 4 (excluding 4)
console.log(slicedColors); // Output: ['blue', 'yellow']

let fruits = ['apple', 'banana', 'cherry', 'mango', 'orange'];
let result = fruits.slice(1, 4); // slice from index 1 to index 4 (excluding index 4)
console.log(result); // Output: ['banana', 'cherry', 'mango']


// split() with string
let phrase = "Coding is fun";
let splittedPhrase = phrase.split(' '); // It will split the string at each space
console.log(splittedPhrase); // Output: ['Coding', 'is', 'fun']


// ==== splice ====
// splice original array ke modify kore
// arr.splice(start, deleteCount, addItem1, addItem2, addItem3);

// console.log(arr.splice(1))
// console.log(arr.splice(1, 3))
// console.log(arr.splice(1, 3, "hello", "Hi"))

// console.log(arr)
// === array ar kono item delete korbo na but add korte chai sei khetere 

console.log(arr.splice(2, 0, 4))

console.log(arr)

let fruitsSplice = ['apple', 'banana', 'cherry', 'mango', 'orange'];
let removed = fruitsSplice.splice(2, 1); // Start from index 2, remove 1 element
console.log(fruitsSplice);  // Output: ['apple', 'banana', 'mango', 'orange']
console.log(removed); // Output: ['cherry']

// যখন আমরা fruits.splice(2, 1) ব্যবহার করছি, তখন আমরা index 2 (যেখানে 'cherry' আছে) থেকে শুরু করে ১টি element মুছছি।
// এর ফলে 'cherry' array থেকে মুছে যাবে, আর array-তে বাকি থাকবে: ['apple', 'banana', 'mango', 'orange']।


// splice(2, 1) এর বিশ্লেষণ:
//------------------------------
// 2: এটাকে বলা হয় start index। এখানে আমরা কোন index থেকে শুরু করবো সেটা নির্দেশ করে। 
// 2 মানে 'cherry' এর index, যা মুছে ফেলার জন্য নির্দেশ করা হয়েছে।
// 1: এটা বলে কতটি element মুছে ফেলতে হবে। এখানে ১টি element মুছে ফেলা হচ্ছে, মানে শুধু 'cherry'।