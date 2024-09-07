/**
 * 7.5.“This” in JavaScript
 */

//01. This inside method = object
//02. This in a constructor function some kind of object
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

/**
 * New videos starts 
 * ===================
 * 
 * window object
 * plain function call - window object 
 * with extra things (object reference) this will indicate the object just left of the.[]
 * Ne Function() (constructor function) this indicates an empty {}
 * 
    Global Context: this window object কে নির্দেশ করে।
    Plain Function Call: this আবারও window object কে নির্দেশ করে।
    Object Reference: this সেই object কে নির্দেশ করে যার মধ্য থেকে ফাংশন কল করা হয়েছে (. এর বাম পাশে থাকা object)।
    Constructor Function: this নতুন তৈরি হওয়া খালি object কে নির্দেশ করে।
 */



console.log(this) // window object

function greet(name) {
    console.log(this)
    return `hi${name}`;
}

// plain function call - window object 
// with extra things (object reference) this will indicate the object just left of the.[]
greet('obaydul');

const profile = {
    fistName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    // fullName: function() {  // Old js
    //     return profile.fistName + ' ' + profile.lastName;
    // },
    fullName() { // Modal js
        console.log(this)
        return this.fistName + ' ' + this.lastName;
    }
}

console.log(profile.fistName);
console.log(profile.lastName);
console.log(profile.fullName());

// Ne Function() (constructor function) this indicates an empty {}

function Car(model) {
    this.model = model; // `this` refers to the new object created by `new`
}
let myCar = new Car('Toyota');
console.log(myCar.model); // Output: 'Toyota'
