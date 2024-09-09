/**
 *  4.Spread operator (...)
 * 
 */

// For Array

// let profile = ['Obaydulla' ,30, true, 'programmer'];

// let HomeProfile = ['petu', 'dhaka', ...profile, 'House Home'];

// console.log(HomeProfile);
// console.log(profile)

// For object

const profileObj = {
    firstName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    personTitle: 'Mr',
    fullName() {  
        return this.fistName + ' ' + this.lastName;
    }
}

let homeObject = {
    homeAddress: 'Dhaka',
    ...profileObj,
    homePhone: '2822828',
}

console.log(homeObject)