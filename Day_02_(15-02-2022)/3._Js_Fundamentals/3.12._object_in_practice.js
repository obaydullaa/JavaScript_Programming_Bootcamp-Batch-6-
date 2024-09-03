// Object In Practice

let profile = {
    name: 'Obaydul',
    age: 24,
    profession: 'Js Learner',
    city: 'Rajshahi'
}

// To Update age
profile.age += 1;
console.log(profile.age); // 25

// To Add properties Key  & Updating Data
profile.city = 'Rajshahi';
console.log(profile); //{ name: 'Obaydul', age: 24, profession: 'Js Learner', city: 'Rajshahi' }


/*
 * Creating Object
 * Like Arrays, There are few methods of initializing Objects
 */

// Make an Empty Object and then add to it
let emptyObject = {};
emptyObject.name = 'Obaydul';
emptyObject.age = 24;
emptyObject.city = 'Dhaka';

console.log(emptyObject);

// all at one 
// It object litarel
let profileObj = {
    name: 'Obaydul',
    age: 24,
    city: 'Rajshahi'
}


//another way of initializing an Object
let anotherObject = new Object()
anotherObject.name = 'Obaydul';
anotherObject.age = 24;
anotherObject.city = 'Dhaka';

// Objects
// Object can hold all sorts of data

let allTypeData = {
    age: 24,
    clor: 'red',
    isAgree: true,
    friends: ['Karim', 'Rahim'],
    peoples: {
        name: 'Obaydul',
        age: 23,
    }
}

console.log(allTypeData.friends[1]);