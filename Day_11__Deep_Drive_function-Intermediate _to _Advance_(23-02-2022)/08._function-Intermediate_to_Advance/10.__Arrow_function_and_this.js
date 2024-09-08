/**
 * 10.Arrow function and this
 */

let greet = () => {
    console.log(this)
    return `Hi ${this}`;
}

console.log(greet.call('Obaydulla'))


const profile = {
    fistName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    personTitle: 'Mr',
    fullName() {  
        return () => {
            return this.fistName + ' ' + this.lastName;
        }
    }
}

console.log(profile.fullName()())