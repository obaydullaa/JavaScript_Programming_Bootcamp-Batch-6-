/**
 * 7.4.Constructor function
 */

// Constructor function
// function name first name capital words start 
// call by new keyword 

const profile = {
    fistName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    fullName() { // Modal js
        console.log(this);
        return that.fistName + ' ' + that.lastName;
    }
}


function Profile(firstName, lastName, email) {
    //this ()
    // this keyword auto metic return
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }

}


const obaydul = new Profile('obaydul', 'islam', 'obaydul@gmail.com');
const karim = new Profile('karim', 'karim', 'karim@gmail.com');

console.log(obaydul.fullName())
console.log(obaydul.firstName)
console.log(obaydul)
console.log(karim)











// another example
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