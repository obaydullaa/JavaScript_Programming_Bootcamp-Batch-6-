/**
 *  9.Nested Data destructuring
 * 
 */

// const user = {
//     id: 339,
//     name: 'Fred',
//     age: 20,
//     // education: {  
//     //     degree: 'Honers',
//     // }
// }


// let {education: {degree = 'Maters'} = {} } = user;

// console.log(degree)


// Another example
//----------------------

const user = {
    id: 339,
    name: 'Fred',
    age: 20,
    // education: {  
    //     degree: 'Honers',
    //     college: {
    //         name: 'Dhaka College',
    //     }
    // }
}



// let {education: {college: {name}} = {college: {name: 'DU'} } } = user;
// let {education: {college: {name} = {name: 'Du' }} = {}} = user;
let {education: {college: {name = 'Du'} = {}} = {}} = user;

console.log(name)