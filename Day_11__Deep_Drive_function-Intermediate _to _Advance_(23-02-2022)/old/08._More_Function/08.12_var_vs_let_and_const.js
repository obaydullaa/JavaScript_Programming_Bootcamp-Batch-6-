/**
 * 8.12_var vs let and const
 */

{
    let firstName = 'Obaydul';
    console.log(firstName);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let someVar = 'Blabla';
let someVar = 'Bla ';


console.log(someVar);

/**
 * Moral of the class: We allways use let and const and not use var key word for declear variable.
 */