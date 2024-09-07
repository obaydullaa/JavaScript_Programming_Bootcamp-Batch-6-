/**
 * 7.2.Method
 */

const product = {
    name: 'Print T-shirt',
    price: 10,
    'is available': true,
    productDes() {  // This is method 
        return `${this.name}-$${this.price}`;
    }
}

console.log(product.productDes());