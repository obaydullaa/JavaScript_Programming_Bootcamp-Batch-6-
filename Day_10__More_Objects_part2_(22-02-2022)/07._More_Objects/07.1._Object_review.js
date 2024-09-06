/**
 * 7.1.Object review
 */
// Object => key: value OR Property: value

const product = {
    name: 'Print T-shirt',
    price: 10,
    'is available': true,

}

// Dynamically acess properties


console.log(product.name); // Print T-shirt
console.log(product['name']); // Print T-shirt
console.log(product['is available']); // true

const availAble = 'is available';
console.log(product[availAble]); // true