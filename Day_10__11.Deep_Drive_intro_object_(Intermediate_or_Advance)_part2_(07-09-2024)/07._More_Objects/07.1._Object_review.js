/**
 * 7.1.Object review
 */
// Object => key: value OR Property: value

const product = {
    name: 'Print T-shirt',
    price: 10,
    'is available': true,

}

// Dynamically aces properties


console.log(product.name); // Print T-shirt
console.log(product['name']); // Print T-shirt
console.log(product['is available']); // true

const availAble = 'is available';
console.log(product[availAble]); // true

const profile = {
    fistName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    // fullName: function() {  // Old js
    //     return profile.fistName + ' ' + profile.lastName;
    // },
    fullName() { // Modal js
        return this.fistName + ' ' + this.lastName;
    }
}

console.log(profile.fistName);
console.log(profile.lastName);
console.log(profile.fullName());