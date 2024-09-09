
/**
 * 8.array helper method array helper method array helper method
 *----------------------------
 */

// array helper method array helper method
//--------------------------------------------
// Array Helper meThod Chaining
// Price above 100 will get the 50% discount
// return => "discount Product: dress-300, book-100, bedSheet-175"


let products = [
  { name: 'dress', price: 600},
  { name: 'cream', price: 60},
  { name: 'book', price: 200},
  { name: 'bottle', price: 50},
  { name: 'bedSheet', price: 350},
]

// let filteredProducts = products.filter(products => products.price >= 100 );

// let saleProducts = filteredProducts.map(product => {
//   product.price = product.price / 2;
//   return product;
// })

// let discountedProducts = saleProducts.reduce((acc, curr, index, arr) => {
//   if(index === arr.length - 1) {
//     return acc + curr.name + '_' + curr.price;
//   }else {
//     return acc + curr.name + '_' + curr.price + ', ';
//   }
// }, 'discount Product: ');

// console.log(discountedProducts)
// console.log(filteredProducts);
// console.log(saleProducts);






// arrayHelperMethodsChaining
//----------------------------------

let arrayHelperMethodsChaining =  products 
.filter(products => products.price >= 100 )
.map(product => {
  product.price = product.price / 2;
  return product;
})
.reduce((acc, curr, index, arr) => {
  if(index === arr.length - 1) {
    return acc + curr.name + '_' + curr.price;
  }else {
    return acc + curr.name + '_' + curr.price + ', ';
  }
}, 'discount Product: ');

console.log(arrayHelperMethodsChaining)