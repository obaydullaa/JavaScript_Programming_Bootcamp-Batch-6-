/**
 * 6.5.For loop in practice
 */

// for (Init; condition; sep){

// }

// While Loop
const text = 'Allah Mohan';
let count = 0;

while (count < text.length) {
    console.log(text[count]);
    count++;
}

// For Loop
for (let count = 0; count < text.length; count++) {
    console.log(`${text} Reapeted in ${count} Times.`);
}

// const str = 'Allag Mohan';
// console.log(str.length);

// For Loop
for (let count = 0; count <= text.length; count++) {
    console.log(` ${text[count]}`);
}