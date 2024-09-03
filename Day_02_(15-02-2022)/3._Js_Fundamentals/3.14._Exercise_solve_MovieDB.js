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

console.log(moviZeroOutput) // Movi Id: 2 Movi Name: Teri Meri Movi Rating: 10 Movi Category: Hindi