/**
 *  1.Array destructuring
 */

let profile = [undefined ,30, true, 'programmer'];

// let firsName = profile[0];
// let age = profile[1];
// let isLearner = profile[2];
// let profession = profile[3];

// array destructuring 
//--------------------- 
// avoid any key 
// let [firsName, age, isLearner, profession] = profile;
// let [firsName, , isLearner, profession] = profile;

// Order maintain
let [firstName = 'Anis', age , isLearner, profession] = profile;

console.log(firstName, age, isLearner, profession);