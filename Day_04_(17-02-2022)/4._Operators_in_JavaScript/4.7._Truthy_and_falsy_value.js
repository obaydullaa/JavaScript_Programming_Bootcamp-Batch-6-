/**
 * 7. Truthy and falsy value
Logical Operators

AND(&&), OR(||), and NOT(!)
 */

console.log((10 > 5 && 10 < 10)); //  flase
console.log((10 > 5 || 10 < 10)); //  true
console.log((10 > 5 && 10 !== 10)); //  flase

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false || true); // true
console.log(true || false); // false