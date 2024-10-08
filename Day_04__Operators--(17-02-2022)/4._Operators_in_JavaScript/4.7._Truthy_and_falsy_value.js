/**
 * 7. Truthy and falsy value
Logical Operators

AND(&&), OR(||), and NOT(!)
 */

// check trythy value 
console.log(Boolean(''));

console.log((10 > 5 && 10 < 10)); //  false
console.log((10 > 5 || 10 < 10)); //  true
console.log((10 > 5 && 10 !== 10)); //  false

console.log(true && true);           // true
console.log(true && false);          // false
console.log(false && true);          // false
console.log(false || true);          // true
console.log(true || false);          // true

console.log(!!'');
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!false);