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

// Short cir circuit  and with logical AND(&&) , OR(||) Operator
console.log(true && true && false && true); // false
console.log(true || false || false || false); // true

// Checking true or falsy value
console.log(!!'Hello');
console.log(!!null);
console.log(!!undefined);

let y = 10;
// Logical AND (&&) returns true when every part is true otherwise false
// ekta part false asei porer condition check korbe na tai total result false asbe && ar khetre all true hote hobe
console.log(y > 8 && y !== 15); // true 
console.log(y > 12 && y !== 15); // false // short circuit 

// Logical OR (||) returns true when any part is true otherwise false
// ja kono ekta part true asle total result is true asbe || ar khetre false pale porer condition check korbe.
console.log(y > 12 || y !== 10); // false 
console.log(y > 8 || y !== 15); // true // short circuit 





console.log(true && false); // true 
console.log(false && true); // true 

console.log(true || false); // true 
console.log(false || true); // true  