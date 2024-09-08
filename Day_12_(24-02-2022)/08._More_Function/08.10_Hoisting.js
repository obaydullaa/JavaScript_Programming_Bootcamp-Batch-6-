/**
 * 8.10_Hoisting
 */
var firstName = 'Obaydul';
var lastName = 'Islam'

console.log(firstName);
console.log(lastName);

// Function statment is function wirte before or after call it will work but function expression work only write function then call function
function wow() {
    console.log('Hi');
}
wow();

console.log(wow());

const greet = () => {
    console.log('Hi');
}
greet();