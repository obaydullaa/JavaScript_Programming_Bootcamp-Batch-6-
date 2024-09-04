// if
// else if
// else


const productPrice = 80;

let freeShipping = false;
let hanPic = false;

if (productPrice >= 100) {
    freeShipping = true;
    hanPic = false;
} else if (productPrice >= 60 && productPrice < 100) {
    freeShipping = false;
    hanPic = true;
} else {
    let freeShipping = false;
    let hanPic = false;
}

console.log(freeShipping);
console.log(hanPic);