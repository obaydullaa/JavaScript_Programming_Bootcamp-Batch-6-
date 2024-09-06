/**
 * 7.3.Factory Function
 */

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