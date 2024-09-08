/**
 * 8.13_rest vs spread operator
 */

// ... Rest Operator
// ... spread Operator

// Different between rest and spread operator

// function product(name, ...property) { // It's Rest Operator 
//     console.log(name);
//     console.log(property);
//     return `
//         ${name} ${property[0]}
//     `
// }
// const shirt = product('printed T-shirt ', 50, 0, true);

// console.log(shirt);

// ...Spread Operator
// const profile = ['Obaydul', 'Islam', 24, 'Web Development'];

// const copyProfile = [...profile]; // Spread Operator

// console.log(copyProfile);


const product = {
    name: 'T-shirt',
    price: '$50',
    shoInfo() {
        console.log(this);
        return `${this.name}-${this.price}`;
    }
}

function productOut({ name, price }) {
    console.log(product);
    console.log(name, price);
}
productOut({...product });