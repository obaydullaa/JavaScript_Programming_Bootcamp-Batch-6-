/*
                Exercise Object
            =======================

                Home work 02 
        ----------------------------
/*


/*

    Write you Bio (By grouping closely related data)
   ===================================================
    I am shamim Hasan & 25.I'm a web developer.I love "Javascripr"
            1             2             3               4

        1. Object
        2. Data Store by assign key value pair and separate those by ,(comma)
        3. Addition
        4. store it intro a reference
        5. Calling the reference
*/

let myAbout = {
    name: 'Obaydulla',
    age: 24,
    prof: 'Student',
    love: '"JavaScript"',
}

let myAboutOutput = `I am ${myAbout.name}  and ${myAbout.age} I'm a ${myAbout.prof} I Love ${myAbout.love}`

console.log(myAboutOutput); // Done


/*
       Invalid Key (Explanation)
    ==================================

    const someObject = {}

    // Which of the following are valid:

    // someObject._name = "Hedwig";

    someObject.age = 6;

    var prop = "color";
    someObject[prop] = 'red';

    someObject.123 = true;

*/

const someObject = {};
someObject._name = "Obaydulla";
someObject.age = 24;

console.log(someObject._name) // Obaudulla
console.log(someObject.age) // 24

let prop = 'color';


// someObject.[prop]= 'red';

// It is not right way access in object, It will be someObject.prop
// Example:

someObject.prop = 'red';
console.log(someObject.prop); // red

// someObject.124 = true;
// If you want to Access Object it will be string, number is not correct for access in Object.

// Example Right Way: 
someObject.sotti = true;


/*
    Structuring a movie database(10 mobies)
    ==========================================
    id 
    name
    rating 
    category

    Getting the movie details
*/

const movie = [
    {
        id: 1,
        name: 'Movie 01',
        rating: 5,
        category: 'Bangla',
    },
    {
        id: 2,
        name: 'Tere Meri',
        rating: 10,
        category: 'Hindi',
    },
    {
        id: 3,
        name: 'Movi 03',
        rating: 8,
        category: 'English',
    }
]

const moviIndex1 = movie[1]

const moviZeroOutput = ' Movi Id: ' + moviIndex1.id + ' Movi Name: ' + moviIndex1.name + ' Movi Rating: ' + moviIndex1.rating + ' Movi Category: ' + moviIndex1.category;

console.log(moviZeroOutput) // Movi Id: 2 Movi Name: Teri Meri Movi Rating: 10 Movi Category: Hindi