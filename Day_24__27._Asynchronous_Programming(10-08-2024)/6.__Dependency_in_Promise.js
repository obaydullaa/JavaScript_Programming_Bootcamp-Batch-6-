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

// function one(){
//     setTimeout(()=> {
//         console.log('After 2 seconds')
//         return 1;
//     }, 2000)
// }

// function two(){
//     setTimeout(()=> {
//         console.log('After 2 seconds')
//         return 2;
//     }, 2000)
// }

// function three(){
//     setTimeout(()=> {
//         console.log('After 2 seconds')
//         return 3;
//     }, 2000)
// }

// console.log(one()) // undefined 
// console.log(two()) // undefined 
// console.log(three()) // undefined 

// 2 seconds time lage tai undefined asse
// aigolo amra deal korbo:-
//-----------------------------
// callback 
// promise 
// async await 




/**
 * 3.Handling asynchronous action -callback
 */

// Callback pattern 

// function one(fn){
//     setTimeout(()=> {
//         console.log('After 2 seconds')
//         fn(1);
//     }, 2000)
// }

// function two(fn){
//     setTimeout(()=> {
//         console.log('After 2 seconds')
//         fn(2);
//     }, 2000)
// }


// function callBackFnOne(num) {
//     console.log(num)
// }

// console.log(one(callBackFnOne))

// short from 

// console.log(one((num) => {
//     console.log(num)
// })) 

// console.log(two((num2) => {
//     console.log(num2)
// }) )



/**
 * 4.callback chaining -callback hell
 */

// function one(fn){
//     setTimeout(()=> {
//         console.log('After 2 seconds')
//         fn(1);
//     }, 2000)
// }

// function two(fn){
//     setTimeout(()=> {
//         console.log('After 2 seconds')
//         fn(2);
//     }, 2000)
// }

// function three(fn){
//     setTimeout(()=> {
//         console.log('After 2 seconds')
//         fn(3);
//     }, 2000)
// }

// callback hell
// Christmas tree 
// So we use  promise

// // callback chaining 
// one((num1) => {
//     console.log(num1)
//     two((num2) => {
//         console.log(num1 + num2);
//         console.log(num2)
//         three((num3) => {
//             console.log(num3)
//             console.log(num1 + num2 + num3);
//         })
//     })
// })


// one((num) => {
//     console.log(num)
// })

// two((num2) => {
//     console.log(num2)
// }) 

// three((num2) => {
//     console.log(num2)
// }) 

/**
 * 5.Understanding promise
 */

// function one(fn){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve(1);
//             // reject(new Error(1));
//         }, 2000)

//     }) 
// }

// function two(fn){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             // resolve(2);
//             reject(new Error(2));
//         }, 2000)
//     }) 
// }

// function three(fn){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             // resolve(3);
//             reject(new Error(3));
//         }, 2000)
//     }) 
// }

// // Resolve
// // reject
// // pending 

// three()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// two()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// one()
//     .then((data) => {
//         console.log(data) 
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// console.log(one())



/**
 * 
 * 6.Dependency in Promise
 * 
 */

function one(fn){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(1);
            // reject(new Error(1));
        }, 2000)

    }) 
}

function two(fn){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(2);
            // reject(new Error(2));
        }, 2000)
    }) 
}

function three(fn){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(3);
            // reject(new Error(3));
        }, 2000)
    }) 
}


one() 
    .then((num1) => {
        console.log(num1); 
        two()
            .then(((num2) => {
                console.log(num2)
                console.log(num1 + num2)
                three()
                    .then(((num3) => {
                        console.log(num3)
                        console.log(num1 + num2 + num3)
                    }))
                    .catch((err) => {
                        console.log(err)
                    })
            }))
            .catch((err) => {
                console.log(err)
            })
    })
    .catch((err) => {
        console.log(err)
    })


// Resolve
// reject
// pending 

// three()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// two()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// one()
//     .then((data) => {
//         console.log(data) 
//     })
//     .catch((err) => {
//         console.log(err);
//     })
