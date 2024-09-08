/**
 * 8.8_First class function
 */

// First Class function

// function wow() {
//     console.log('Hi');
// }
// wow();


// const greet = () => {
//     console.log('Hi');
// }

//** Callback function (Kono ekta funtions ke onno ekta function ke return kore & kono ekta func ke jodi parameter hisane received call back function bole )

//Higher Order Function

// const greet = () => {
//     return function() {
//         return 'Hi';
//     }
// }

// console.log(greet()());

// Callback functions
const greet = (fn) => {
    console.log(fn());
}

greet(function() {
    return 'Hi';
});