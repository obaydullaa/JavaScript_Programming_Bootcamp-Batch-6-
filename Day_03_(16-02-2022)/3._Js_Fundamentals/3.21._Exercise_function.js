/*
    Problem 1
    ===================
    Write you Bio (By grouping closely related data)
   ===================================================
    I am shamim Hasan & 25.I'm a web developer.I love "Javascripr"
            1             2             3               4

        1. Fnction
        2. Works with parameter and arguments
        3. Addition
        4. store it intro a reference
        5. Calling the reference

        Problem 02 
       =======================

       const movie = [
        {
        id: 1,
        name: 'Movi 01',
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

console.log(moviZeroOutput)

*/

// I am shamim Hasan & 25.I'm a web developer.I love "Javascripr"
function myAbout(firstName, lastName, age, prof, futureProf) {
    return `I am ${firstName} ${lastName} & ${age}.I'm a ${prof}.I love ${futureProf}`
}
myAbout('Obaydul', 'Islam', 24, 'web developer', '"JavaScript"');

const outputmyAbout = myAbout('Obaydul', 'Islam', 24, 'web developer', '"JavaScript"');

console.log(outputmyAbout); // I am Obaydul Islam & 24.I'm a web developer.I love "JavaScript" 

/*
        Problem 02 
       =======================

       const movie = [
        {
        id: 1,
        name: 'Movi 01',
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
console.log(moviZeroOutput)

*/

// // Soulutios 01

// const movieData = [{
//         id: 1,
//         name: 'Movi 01',
//         rating: 5,
//         category: 'Bangla',
//     },
//     {
//         id: 5,
//         name: 'Tere Meri',
//         rating: 10,
//         category: 'Hindi.',
//     },
//     {
//         id: 3,
//         name: 'Movi 03',
//         rating: 8,
//         category: 'English',
//     }
// ]
// const objRef = movieData[1];

// function moviFunc(movies) {
//     return `Movi Id is ${movies.id} And Movi name is ${objRef.name} This Movi Rating ${movies.rating} & category ${movies.category}`;
// }


// console.log(moviFunc(objRef)); // Movi Id is 5 And Movi name is Tere Meri This Movi Rating 10 & category Hindi. 

// Soulutios 01

const movieData = [{
        id: 1,
        name: 'Movi 01',
        rating: 5,
        category: 'Bangla',
    },
    {
        id: 5,
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

let allMovi = '';

function moviFunc(movies) {

    for (let i = 0; i < movies.length; i++) {
        const moviId = movies[i].id;
        const moviName = movies[i].name;
        const moviRating = movies[i].rating;
        const moviCategory = movies[i].category;

        allMovi += `Movi Id is ${moviId} And Movi name is ${moviName} This Movi Rating ${moviRating} & category ${moviCategory}.\n`;
    }

    return allMovi;
}


console.log(moviFunc(movieData));