/**
 * 7.3.Factory Function
 */



const profile = {
    fistName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    // fullName: function() {  // Old js
    //     return profile.fistName + ' ' + profile.lastName;
    // },
    fullName() { // Modal js
        console.log(this)
        return this.fistName + ' ' + this.lastName;
    }
}

console.log(profile.fistName);

// it's call factory function 
function printProfile(firstName, lastName, email) {
    return {
        fistName,
        lastName,
        email,
        fullName() {
            console.log(this)
            return this.fistName + ' ' + this.lastName;
        }
    }
}


console.log(printProfile('obaydul', 'islam', 'obaydul@gmail.com'))
console.log(printProfile('korim', 'korim', 'korim@gmail.com'))




function product(name, price, availability) {
    return {
        name,
        price,
        'is available': true,
        productDes() {
            return `${this.name}-$${this.price}`;
        }
    };
}

console.log(product('Print T-shirt', 10, true));
console.log(product('Black T-shirt', 20, false));

// const product2 = {
//     name: 'sneaker',
//     price: 50,
//     'is available': true,
//     productDes() {
//         return `${this.name}-$${this.price}`;
//     }
// }