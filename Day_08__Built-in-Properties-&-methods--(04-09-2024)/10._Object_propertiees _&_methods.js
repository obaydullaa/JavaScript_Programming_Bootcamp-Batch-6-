/**
 * Play with object 
 * 
 *  we can't for of loop in object bcz it's not iterable 
 *  for in loop will be
 * 
 */

// const profile = {
//     lastName: 'obaydulla',
//     email: 'obaydulla@gmail.com',
//     personTitle: 'Mr',
//     fullName() {
//         return this.personTitle = ' ' + this.firstName + ' ' + this.lastName;
//     },
// }

// console.log('lastName' in profile); // true 
// console.log('firstName' in profile) // false

// console.log(profile.firstName); // Undefined

// // profile.fistName
// // if('firstName' in profile) {
// if(profile['firstName']) {
//     console.log('firstName is a valid property')
// }else {
//     console.log('firstName is not valid property')
// }


const profile = {
    lastName: 'obaydulla',
    email: 'obaydulla@gmail.com',
    personTitle: 'Mr',
    fullName() {
        return this.personTitle = ' ' + this.firstName + ' ' + this.lastName;
    },
}


for(let prop in profile) {
    console.log(`${prop} - ${profile[prop]}`); 
}

// // Object keys access 
// const keys = Object.keys(profile);
// console.log(Object.keys(profile)) ;

// for (let elm of keys) {
//     console.log(profile[elm])
// }

// // Object values access 
const keys = Object.keys(profile);
const values = Object.values(profile);
const entries = Object.entries(profile);
console.log(Object.entries(profile)) ;

// for (let elm of keys) {
//     console.log(profile[elm])
// }

// for (let value of values) {
//     console.log(value)
// }


for (let [name, value] of entries) {
    // const [name, value] = data;
    console.log(name)
    console.log(value)
}