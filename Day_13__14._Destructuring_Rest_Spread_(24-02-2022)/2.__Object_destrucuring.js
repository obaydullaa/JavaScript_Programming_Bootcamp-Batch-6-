/**
 *  2.Object destrucuring
 * 
 */

const profile = {
    fistName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    personTitle: 'Mr',
    fullName() {  
        return this.fistName + ' ' + this.lastName;
    }
}

// console.log(profile.fistName)
// console.log(profile.lastName)

// No order maintain
let {fistName, edu ='University', lastName, email, personTitle, fullName}   = profile;

console.log(fistName, lastName)
console.log(fullName.call(profile), edu)

