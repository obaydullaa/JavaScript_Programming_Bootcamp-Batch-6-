/**
 * 09.12_Sorting array
 */

/**
 *   
 */

//  let numbers = [1, 7, 3, 9];
//  const sortArr = numbers.sort();
//  console.log(sortArr); 

const products = [{
        id: 1,
        name: 'T-shirt',
        price: 10,
    },
    {
        id: 3,
        name: 'Pant',
        price: 10,
    },
    {
        id: 2,
        name: 'shoes',
        price: 20,
    },
]

//a>b 1
//a< b -1
// a==b 0
const sortedResult = products.sort(function(a, b) {
    //  solution -01
    const valueA = a.name.toLowerCase();
    const valueB = b.name.toLowerCase();

    if (valueA > valueB) return 1;
    if (valueA < valueB) return -1;
    return 0;
    // //  solution -02
    // return (a.id > b.id) ? 1 : -1 || 0;
});

console.log(sortedResult);