/**
 *  3.Rest operator (...)
 * 
 */

// Array

// let profile = ['Obaydulla' ,30, true, 'programmer'];

// let [fistName, ...restValue] = profile;

// console.log(fistName)
// console.log(restValue)


// object 

const profileObj = {
    firstName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    personTitle: 'Mr',
    fullName() {  
        return this.fistName + ' ' + this.lastName;
    }
}

let {firstName, ...restValueObj}  = profileObj;

console.log(firstName);
console.log(restValueObj);