/**
 * 09.9_copy array
 */

/**
 * We can multiple array combined by spread operator it's come Es6.
 *  We Can copy arry for slice() or splice() but best slice().
 * slice accept 2 prtameter and splice() accept 3 paramiter.
 */

const numbers = [1, 3, 5, 7, 10];

// const copiedArray = [...numbers]
// const copiedArray = numbers;

// const copiedArray = numbers.slice(0, numbers.length);

const copiedArray = numbers.slice(0, 4);
// const copiedArray = numbers.splice(4, numbers.length);

console.log(copiedArray);