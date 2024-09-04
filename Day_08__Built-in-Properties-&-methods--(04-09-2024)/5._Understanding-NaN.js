
/**
 * NaN  ( Not a number)
 * NaN all time result false
 */

// NaN all time result false
console.log(NaN == NaN) // false
console.log(1 === 1) // false


// isNaN() কি?
// isNaN() হল একটি ফাংশন যা পরীক্ষা করে কোনো মান (value) "Not a Number" (NaN) কিনা। 
// যদি মানটি সংখ্যা না হয়, তাহলে এটি true ফেরত দেয়, আর যদি সংখ্যা হয়, তাহলে false ফেরত দেয়।

console.log(isNaN(10)) // false
console.log(isNaN(-10)) // false
console.log(isNaN('obaydul')) // true


// isNaN() কিভাবে কাজ করে Boolean মানের সাথে?
// isNaN(false) এবং isNaN(true): এখানে, false এবং true হল Boolean মান।
//  প্রথমে Number() ফাংশন ব্যবহার করে Boolean মানগুলোকে সংখ্যায় রূপান্তর করা হয়:
// Number(false) হল 0
// Number(true) হল 1
// যেহেতু 0 এবং 1 দুটোই সংখ্যা, তাই isNaN(false) এবং isNaN(true) দুটোই false দেয়, কারণ এগুলো সংখ্যা।

// মূল ধারণা
// // যখন তুমি isNaN() ব্যবহার করে কোনো মান পরীক্ষা করো, তখন প্রথমে JavaScript সেই মানকে সংখ্যা বানানোর চেষ্টা করে। 
// যদি সংখ্যা বানানো সম্ভব হয়, তাহলে isNaN() false দেয়।
//  আর যদি সংখ্যা বানানো সম্ভব না হয়, তাহলে এটি true দেয়।


console.log(isNaN(false)) //  0  false
console.log(isNaN(true))  // 1 false


console.log(isNaN(false)) // false
console.log(isNaN(true)) // false
console.log(isNaN(NaN)) // false


// Number.isNaN()  এটা যদি শুধুমাত্র রেজাল্ট NaN আছে তাহলে true দেয়

console.log(Number.isNaN(NaN))
console.log(Number.isNaN(false))

// NaN (Not a Number) হচ্ছে জাভাস্ক্রিপ্টে একটি বিশেষ মান, যা নির্দেশ করে যে কোনো কিছু সংখ্যায় রূপান্তরিত করা সম্ভব নয়। 
// এর বিশেষত্ব হলো, NaN নিজেই নিজের সাথে সমান নয়!

console.log(NaN !== NaN) // true
console.log(1 !== 1) // false


const numb = '123488iii';
console.log(Number(numb) !== Number(numb));