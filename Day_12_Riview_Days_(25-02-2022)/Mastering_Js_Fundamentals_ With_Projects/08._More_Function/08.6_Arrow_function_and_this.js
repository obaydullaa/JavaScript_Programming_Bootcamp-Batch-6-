/**
 * 8.6_Arrow function and this
 */


const product = {
    name: 'T-shirt',
    price: 50,
    showInfo() {
        return `${this.name} ${this.price}`;
    }
}
const info = product.showInfo();

console.log(info);