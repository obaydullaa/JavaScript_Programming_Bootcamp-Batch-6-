// Dynamically aces properties

const product = {
    name: 'Print T-shirt',
    price: 10,
    'is available': true,

}

console.log(product.name); // Print T-shirt
console.log(product['name']); // Print T-shirt
console.log(product['is available']); // true

const availAble = 'is available';
console.log(product[availAble]); // true

const profile = {
    'fist Name': 'obaydul', // invalid property
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    // fullName: function() {  // Old js
    //     return profile.fistName + ' ' + profile.lastName;
    // },
    // Modal js
    fullName() { 
        return this.fistName + ' ' + this.lastName;
    }
}

console.log(profile.fistName);
console.log(profile.lastName);
console.log(profile.fullName());

// Dynamically access properties and invalid properties
const myVar = 'email';
console.log(profile[myVar]);
console.log(profile.myVar);
console.log(profile['fist Name']); // obaydul // access invalid properties

for(let aa in profile) {
    console.log(aa); 
    console.log(profile[aa]); 
}