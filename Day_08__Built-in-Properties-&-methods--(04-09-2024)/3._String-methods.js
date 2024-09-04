


/**
 * split
 * split => array return kore and amara chaile space (" ")  diye split korte pare 
 
 * concat
 * jog kora 
 *  
 * charAt  // character access kora
 * CharCodeat // character ascii number ber kora
 */



// const str = "Hello Wold";

// // split 
// console.log(str.split(' ')); // ['Hello', 'Wold']

// // concat  // jog kora
// console.log(str.concat(' I am from', ' Bangladesh')); // ['Hello', 'Wold']


// // charAt  // character access kora
// console.log(str.charAt(6)); // W // 


// // charCodeAt  // character ascii number ber kora
// console.log(str.charCodeAt(1)); // W // 


/**
 * Search
 */

const str = "Hello Wold";

// search ar khetere apmar pattern use korte pare letter diye search korte pare, na pele -1 return korbe
console.log(str.search('e')); // 1

// replace korte use hoi => replace word then replace value;
console.log(str.replace('Hello','Hi'));


// padStart
// padEnd

console.log(str.padStart(15, '*') ) 
console.log(str.padEnd(15, '*') ) 