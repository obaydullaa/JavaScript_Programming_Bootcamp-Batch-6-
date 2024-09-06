/**
 * 7.4.Constructor function
 */

// Constructor function

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.productDes = function() {
        return `${this.name}-$${this.price}`;
    }
}
const procuct1 = new Product('sneaker', 50);

console.log(procuct1.name);
console.log(procuct1.productDes());