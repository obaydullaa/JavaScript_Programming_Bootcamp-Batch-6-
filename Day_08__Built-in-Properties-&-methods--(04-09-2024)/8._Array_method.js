
/**
 * Array Methods
 * ================================
 * concat() => দুই বা তার বেশি array-কে একসাথে যোগ করা।
 * join() => array এর সব elements কে একটি নির্দিষ্ট character দিয়ে যুক্ত করা।
 * indexOf() => array এর মধ্যে কোনো মান খুঁজে তার প্রথম occurrence-এর index দেয়। যদি না পায়, তাহলে -1 রিটার্ন করে।
 * lastIndexOf() => array এর মধ্যে কোনো মানের সর্বশেষ অবস্থানের index খুঁজে বের করা।
 * fill() => array এর নির্দিষ্ট অংশে নির্দিষ্ট মান পূরণ করা।
 */


const arr = [2, 3, 5, 6, 7, 5];
const arr2 = [8, 9, 10];

//====== concat() =======
let conArr = ['apple', 'banana', 'cherry'];
let ConResult = conArr.join(', '); // This will join all elements with a comma and space
console.log(ConResult); // Output: 'apple, banana, cherry'


// ======== join() ========
// console.log(arr.join(''))
// console.log(arr.join('_'))
// console.log(arr.join(','))
let array = ['apple', 'banana', 'cherry'];
let result = array.join(', '); // This will join all elements with a comma and space
console.log(result); // Output: 'apple, banana, cherry'


// ======== indexOf() ========
// console.log(arr.indexOf(2))

// ======== lastIndexOf() ========
console.log(arr.lastIndexOf(5)) // 5


// ======== fill() ========
let numbers = [1, 2, 3, 4, 5];
let fillResult = numbers.fill(0, 2); // This will fill the array with 0 starting from index 2
console.log(fillResult); // Output: [1, 2, 0, 0, 0]
