/**
 * 7.10.Pass by value /pass by reference
 */

// Pass by value
let a = 10;

function passByValue(inputNum) {
   let b = inputNum;
   console.log(b)
    b = 20
    return b;
}




console.log(passByValue(a)); // 20 
// 20
console.log(a); // 10


// Pass by reference
let aObj = { 
    age: 10
 };

function passByReference(inputObj) {
    let bObj = inputObj;
    console.log(bObj);
    bObj.age = 20;
    return bObj;
}

console.log(passByReference(aObj))

console.log(aObj); //{ age: 20 }