/**
 * 8.Nullish coalescing operator (?? )
 * ?? =>null & undefined,  are considered as falsy value
 * 
 */

let count = 0;
let text = '';

console.log(true || false)
console.log(false || true)

console.log(true ?? false)
console.log(false ?? true)

// let result = count || 34;
// let resultText = text || 'default value';

let result = count ?? 34;
let resultText = text ?? 'default value';

console.log(result)
console.log(resultText)