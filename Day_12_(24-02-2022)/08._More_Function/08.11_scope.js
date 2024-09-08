/**
 * 8.11scope
 */

//functional scope
const firstName = 'Korim'

function myFunc() {
    // const firstName = 'Obaydul';
    console.log(firstName);
    console.log(lastName);

    return function innerFunc() {
        // const firstName = 'Islam'
        const lastName = 'Islam'
        console.log(firstName);
    }
}
myFunc()();
console.log(firstName);