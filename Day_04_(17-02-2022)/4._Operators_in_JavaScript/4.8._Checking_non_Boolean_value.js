/**
 * 8.Checking non-Boolean value
 */

// Falsy Value

// 0
//     ""
// false
// undefined
// null

console.log('Hello' && 'World'); // World
console.log('Hello' || 'World'); // Hello

// Short circuling  and with logival SND(&&) , OR(||) Operator
console.log(true && true && false && true); // false
console.log(true || false || false || false); // true

// Cheking true or falsy value
console.log(!!'Hello');
console.log(!!null);
console.log(!!undefined);