/**
 * 4.Function as arguments
 */


// function calculate(num1, num2, action = square) {
//     if(action === 'sum') {
//         return num1 + num2;
//     }else if(action === 'multiply') {
//         return num1 * num2;
//     }else {
//         return num1 ** num2;
//     }
// }
// console.log(calculate(3, 2, 'sum'));


function calculate(num1, num2, action = square) {
     return action (num1, num2);
}


function sum(num1, num2) {
    return num1 + num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function square(num1, num2) {
    return num1 ** num2
}


console.log(calculate(3, 2, sum));
console.log(calculate(3, 2, multiply));
console.log(calculate(3, 2, square));
console.log(calculate(3, 2));



