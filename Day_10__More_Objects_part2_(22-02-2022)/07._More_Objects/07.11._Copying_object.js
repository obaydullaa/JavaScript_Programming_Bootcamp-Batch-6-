/**
 * 7.11.Copying object
 */

// // Object Copy Waye - 01
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