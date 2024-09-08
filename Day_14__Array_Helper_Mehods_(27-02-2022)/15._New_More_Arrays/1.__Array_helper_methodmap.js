/**
 * 1.Array helper method map
 * ---------------------------
 */

// Map 
// It works with an array 
// return an array with all (?) substitutes 
// results depends ho you manipulate the data
// must return from the call back function 
// doesn't mutate the original array

let arr = [1, 2, 3, 4];

let result = arr.map(function (elm){
    console.log(elm)
    return elm * 2;
});

console.log(result);
console.log(arr);