/**
  Number()
  parseInt()
  parseFloat()
  toFixed()
  Number.MAX_VALUE
  Number.MIN_VALUE
 Number.MAX_SAFE_INTEGER
 Number.MIN_SAFE_INTEGER

 */

console.log(typeof 10);
console.log(typeof -10);
console.log(typeof 10.4435);

console.log(Number('10'))
console.log(Number('10ujjjjj'))    // NaN 

// parseInt() ar khetere number 1st likte hoba ar por illegal or string hoba   
console.log(parseInt('10ujjjjj'))  // 10

// parseInt() ar khetre base daya lagle dite hoi  exam: decimal, hex decimal etc,
console.log(parseInt('35345', 8))  // 15077
console.log(parseInt('10', 2))  // 2

// dosomic number ar jonno use korte hoi
console.log(parseFloat(20.12959))  // 2

// dosomic number ar por koi ghor chai setyo bole daya jai r na dile roundfiger dakhabe
const fixNumb = 3993.393
console.log(fixNumb.toFixed()) //

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

/**
 * 
 * 
 */

// 1. Number()
// Number() হল একটা ফাংশন যা যেকোনো কিছু (যেমন একটা স্ট্রিং) সংখ্যায় পরিণত করে।

let age = "10"; 
let numberAge = Number(age); 
console.log(numberAge); // 10

// 2. parseInt()
// parseInt() হল একটা ফাংশন যা স্ট্রিং এর ভিতর থেকে পূর্ণ সংখ্যা (ইন্টিজার) বের করে আনে।

let height = "150cm";
let numberHeight = parseInt(height); 
console.log(numberHeight); //150


// 3. parseFloat()
// parseFloat() হল একটা ফাংশন যা স্ট্রিং এর ভিতর থেকে দশমিক সংখ্যা (ফ্লোট) বের করে আনে।

let weight = "45.6kg"; 
let numberWeight = parseFloat(weight); 
console.log(numberWeight); //45.6


// 4. toFixed()
// toFixed() হল একটা ফাংশন যা সংখ্যা কত দশমিকের পরে কতটি সংখ্যা দেখাবে তা নির্ধারণ করতে দেয়।

let price = 25.6789; 
let fixedPrice = price.toFixed(2); /
console.log(fixedPrice); // 25.68


// 5. Number.MAX_VALUE
// Number.MAX_VALUE হল জাভাস্ক্রিপ্টে সবচেয়ে বড় সংখ্যা যা রাখা সম্ভব।

console.log(Number.MAX_VALUE); //  1.7976931348623157e+308


// 6. Number.MIN_VALUE
// Number.MIN_VALUE হল জাভাস্ক্রিপ্টে সবচেয়ে ছোট সংখ্যা যা রাখা সম্ভব। তবে এটা ০ এর কাছাকাছি, কিন্তু ০ নয়।

console.log(Number.MIN_VALUE); // 5e-324


// 7. Number.MAX_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER হল জাভাস্ক্রিপ্টে সবচেয়ে বড় পূর্ণ সংখ্যা যা নির্ভুলভাবে কাজ করতে পারে।

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


// 8. Number.MIN_SAFE_INTEGER
// // Number.MIN_SAFE_INTEGER হল জাভাস্ক্রিপ্টে সবচেয়ে ছোট পূর্ণ সংখ্যা যা নির্ভুলভাবে কাজ করতে পারে।

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
