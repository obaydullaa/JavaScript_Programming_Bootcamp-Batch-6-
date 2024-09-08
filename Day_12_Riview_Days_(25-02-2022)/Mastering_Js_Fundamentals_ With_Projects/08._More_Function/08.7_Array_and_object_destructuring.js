/**
 * 8.7_Array and object destructuring
 */


// const product = ['T-shirt', 10, 0, true];

// const name = product[0]
// const price = product[1]
// const discount = product[3]

//Array Destrucuring
// const [name, price, ...others] = product;

// console.log(name, price, others);



//Object Destructuring 

const OursProduct = {
    name: 'T-shirt',
    price: 50,
    showInfo() {
        console.log(this);
        return `${this.name} ${this.price}`;
    }
}

const { name, price } = OursProduct;
console.log(name, price);

function productOut({ name, price, showInfo }) {
    console.log(name, price);
    // console.log(name, price, discount, shipping, category);
}
productOut(OursProduct);