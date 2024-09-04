/**
 * 7.10.Pass by value /pass by reference
 */

// Pass by value
let a = 10;

function passByValue(a) {
    a = true;
}
passByValue(a)

console.log(a);


// Pass by reference
let obj = { value: 10 };

function passByReference(passedobj) {
    passedobj.value = 20;
}
passByReference(obj)

console.log(obj);