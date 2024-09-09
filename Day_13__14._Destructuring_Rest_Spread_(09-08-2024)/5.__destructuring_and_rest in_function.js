/**
 *  5.destructuring and rest in function
 * 
 */

// For Function 


function printProfile({email, ...restValue}) {
    console.log(restValue)
    // return `${firstName} ${lastName} ${email}` 
    return `${restValue.firstName} ${restValue.lastName} ${email}`
}

const profile = {
    firstName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    personTitle: 'Mr',
    fullName() {  
        return this.fistName + ' ' + this.lastName;
    }
}

console.log(printProfile(profile))