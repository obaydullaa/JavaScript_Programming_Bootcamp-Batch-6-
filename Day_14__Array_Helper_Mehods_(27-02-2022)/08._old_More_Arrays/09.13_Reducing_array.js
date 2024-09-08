/**
 * 09.13_Reducing array
 */

/**
 * Reducing array come in Es6
 *  reduce method work some kind of loop
 */

// const numbers = [1, 4, 6, 10];

// // acc = 1 cur = 4
// // acc = 5 cur = 6
// // acc = 11 cur = 10
// // acc = 21

// const some = numbers.reduce((accumulator, current) => {
//     return accumulator + current;
// })

// console.log(some); // 21

const numbers = [1, 4, 6, 10];

// acc = 10 cur = 1
// acc = 11 cur = 4
// acc = 15 cur = 6
// acc = 21 cur = 10
// acc = 31

const some = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 10)

console.log(some);