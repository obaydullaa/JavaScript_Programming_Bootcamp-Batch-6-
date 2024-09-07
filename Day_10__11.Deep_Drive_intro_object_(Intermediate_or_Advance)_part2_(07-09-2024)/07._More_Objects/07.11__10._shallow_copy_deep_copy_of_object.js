/**
 * 7.11.Copying object
 * 
 * assign (shallow copy) 
 * spread operator (...) (shallow copy) 
 * JSON.stringify() (deep copy )
 */

// // assign (shallow copy)  part-1

// const aObj = {
//     age: 30,
// }

// //shallow copy (no nexted  object then use shallow )
// bObj = aObj;


// const profile = {
//     firstName: 'Obaydul',
//     lastName: 'islam',
//     email: 'Obaydul@gmail.com',
//     fullName() {
//         console.log(this)
//         return this.fistName + ' ' + this.lastName;
//     }
// }

// let copiedProfile = Object.assign({own: 'value'}, profile); // shallow copy
// console.log(copiedProfile);
// copiedProfile.firstName = 'Karim';
// copiedProfile.address.city = 'Barisal';
// console.log(copiedProfile);
// console.log(profile)


//deep copy  nexted object then use deep copy

const profile = {
    firstName: 'Obaydul',
    lastName: 'islam',
    email: 'Obaydul@gmail.com',
    address: {
        city: 'Dhaka',
    },
    fullName() {
        console.log(this)
        return this.fistName + ' ' + this.lastName;
    }
}

// const copiedProfile = Object.assign({own: 'value'}, profile); // shallow copy
let copiedProfile = JSON.stringify(profile);
console.log(copiedProfile);

copiedProfile = JSON.parse(copiedProfile);

console.log(copiedProfile)

copiedProfile.address.city = 'Barisal';

console.log(copiedProfile);

console.log(profile)














// const product1 = {
//     name: 'T Shirt',
//     price: 50,
//     avaiable: true,
// }

// let product2 = {};
// for (let key in product1) {
//     product2[key] = product1[key];
// }


// console.log(product2);


// // Object Copy Waye - 02 (Recommended)
// const product1 = {
//     name: 'T Shirt',
//     price: 50,
//     avaiable: true,
// }

// const product2 = Object.assign({color: 'red'}, product1);

// console.log(product2);



// Object Copy Waye - 03 (Recommended)
const product1 = {
    name: 'T Shirt',
    price: 50,
    avaiable: true,
}

const product2 = {...product1, color: 'red' } // (... Spread Operetor )

console.log(product2);