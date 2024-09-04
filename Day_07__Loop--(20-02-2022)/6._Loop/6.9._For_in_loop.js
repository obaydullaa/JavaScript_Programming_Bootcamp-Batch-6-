/**
 * 6.9.For in loop
 */

// Object Looping
// For in loop

const myProfile = {
    firstName: 'Obaydul',
    lastName: 'Islam',
    age: 24,
    city: 'Rajshahi',
}

for (let key in myProfile) {
    console.log(myProfile[key]);
}

// For in mean index exicute in array
let myArray = [1, 2, 3, 4, 5]
for (let key in myArray) {
    console.log(key);
}


/**
 * For in loop use for Object Recommended, It's  better not use for array
 */