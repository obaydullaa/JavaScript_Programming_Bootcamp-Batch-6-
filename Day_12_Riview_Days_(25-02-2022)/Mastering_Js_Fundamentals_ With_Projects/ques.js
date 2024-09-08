//functional scope
function myFunc() {
    const firstName = 'Obaydul';
    console.log(firstName);

    // return function innerFunc() { // return na korle output aslo na kano ?
    //     const firstName = 'Islam'
    //     console.log(firstName);
    // }
}
myFunc();
console.log(firstName);