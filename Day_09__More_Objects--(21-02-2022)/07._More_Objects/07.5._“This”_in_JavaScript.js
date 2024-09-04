/**
 * 7.5.“This” in JavaScript
 */

//01. This inside method = object
//02. This in a constructor function some kimd of object
//03. Otherwise -always indicate window

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.productDes = function() {
        return `${this.name}-$${this.price}`;
    }
    console.log(this); ////02. This in a constructor function some kimd of object
}
const procuct1 = new Product('sneaker', 50);

console.log(procuct1.name);
console.log(procuct1.productDes());