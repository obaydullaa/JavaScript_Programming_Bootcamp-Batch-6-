/**
 * 09.6_Find vs filter
 */

/**
 * 
 */

// find() method accept function paramiter
const products = [{
        id: 1,
        name: 'T-shirt',
        price: 10,
    },
    {
        id: 2,
        name: 'T-shirt',
        price: 10,
    },
    {
        id: 3,
        name: 'shoes',
        price: 20,
    },
]

/**
 * find return will be single item and filter() return will be multiple item.
 */

// const rejult = products.find(function(productInfo) { // It's some kind of loop
//     return productInfo.name === 'T-shirt';
// });

// const rejult = products.filter(function(productInfo) { // It's some kind of loop
//     return productInfo.name === 'T-shirt';
// });

// console.log(rejult);

/**
 * We can sorty by arrow function. Example->
 */

const rejult = products.filter(productInfo => productInfo.name === 'T-shirt');

console.log(rejult);