/**
 * 7.9.Copy by value/copy by reference
 */

// Copy by value (primitive)
// Copy by Reference  (Reference / complex)

let a = 10;
let b = a;
console.log(a);
console.log(b);

a = 20;

console.log(a);
console.log(b);

// copy by reference
let obj1 = { value: 3 };
let obj2 = obj1;

console.log(obj1);
console.log(obj2);

// obj1 = { value: 5 };
obj1.value = 5;

console.log(obj1);
console.log(obj2);