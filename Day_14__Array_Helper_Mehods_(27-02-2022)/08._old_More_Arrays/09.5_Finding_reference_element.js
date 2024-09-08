/**
 * 09.5_Finding reference element
 */

/**
 * if we serch in reference Type data we can't search or find by inclides() method we can do it by find() method;
 */

// const products = [{
//         id: 1,
//         name: 'T-shirt',
//         price: 10,
//     },
//     {
//         id: 2,
//         name: 'shoes',
//         price: 20,
//     },
// ]
//  // Here object is present but show false;
// console.log(products.includes({
//     id: 1,
//     name: 'T-shirt',
//     price: 10,
// }))

// find() method accept function paramiter
const products = [{
        id: 1,
        name: 'T-shirt',
        price: 10,
    },
    {
        id: 2,
        name: 'shoes',
        price: 20,
    },
]



// calback function it's work like  loop
/**
 * We can use findIndex() method if we use it we get index number.
 */
const rejult = products.find(function(productInfo) { // It's some kind of loop

    return productInfo.name === 'T-shirt';

    // console.log(productInfo.name);
    // console.log(productInfo);
});

console.log(rejult);