/**
 * 8.1.Introduction to the project
 */
// Functions Statement
// function great(name) {
//     return 'Hi ' + name;
// }

// Function Expression
const great = function great(name) {
    return 'Hi ' + name;
}

great.lastName = 'Islam';

console.log(great.lastName);

console.log(great('Obaydulla'))