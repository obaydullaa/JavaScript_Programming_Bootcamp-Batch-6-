/**
 * 
 * 1.Synchronous programming vs asynchronous programming
 * 
 */

// Synchronous programming 
//---------------------------
// Synchronous কাজগুলো একটার পর একটা সিরিয়ালভাবে (ধাপে ধাপে) সম্পন্ন হয়। মানে হলো, একটি কাজ শেষ না হওয়া পর্যন্ত পরবর্তী কাজ শুরু হবে না। JavaScript ডিফল্টভাবে single-threaded ভাষা, তাই Synchronous কাজগুলি একটি সময়েই একটাই সম্পন্ন করতে পারে।

// উদাহরণ দিয়ে বুঝি:
// ধরো তুমি একটি রেস্টুরেন্টে খেতে গিয়েছো, প্রথমে অর্ডার দাও। তারপর রান্না করা শুরু হবে। রান্না শেষ হলে সেটা সার্ভ করা হবে। অর্থাৎ, একটা কাজ শেষ না হওয়া পর্যন্ত অন্য কাজ শুরু হয় না।

// function one(){
//     return 1;
// }

// function two(){
//     return 2;
// }

// function three(){
//     return 3;
// }

// console.log(one())
// console.log(two())
// console.log(three())

// some asynchronous task 
//----------------------------

// Asynchronous (অ্যাসিঙ্ক্রোনাস) Execution:
// Asynchronous কাজগুলো এমনভাবে করা হয় যাতে একটি কাজ শুরু হওয়ার সাথে সাথে অন্য কাজও শুরু করা যেতে পারে, যদিও প্রথম কাজটি তখনও চলতে থাকে। অর্থাৎ, একাধিক কাজ একই সময়ে শুরু হতে পারে এবং কোনো কাজ অন্য কাজের জন্য অপেক্ষা করে না।

// JavaScript এ asynchronous কাজ করতে callback, Promises, এবং async/await ব্যবহৃত হয়।

// sending API request
// Reading or writing filter
// Saving or manipulating data in database
// Accessing data from database



/**
 * 2.Asynchronous code in action
 * 
 */

function one(){
    setTimeout(()=> {
        console.log('After 2 seconds')
        return 1;
    }, 2000)
}

function two(){
    setTimeout(()=> {
        console.log('After 2 seconds')
        return 2;
    }, 2000)
}

function three(){
    setTimeout(()=> {
        console.log('After 2 seconds')
        return 3;
    }, 2000)
}

console.log(one()) // undefined 
console.log(two()) // undefined 
console.log(three()) // undefined 

// 2 seconds time lage tai undefined asse
// aigolo amra deal korbo:-
//-----------------------------
// callback 
// promise 
// async await 