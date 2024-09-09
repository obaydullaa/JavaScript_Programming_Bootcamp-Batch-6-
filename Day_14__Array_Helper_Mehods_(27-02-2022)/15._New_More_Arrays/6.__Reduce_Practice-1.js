
/**
 * 6.Reduce Practice-1
 *----------------------------
 */
// Reduce i very powerful array method
//-----------
// It works with an array 
// return an reduced value based on you
// must return from the call back function 
// doesn't mutate the original array

// acc --- cur
//  1  --- 2 = 3
// 3   --- 3 = 6
// 6   --- 4 = 10

// for acc 10
// 10  ---- 1 = 11
// 11 ----- 2 = 13
// 13 ----- 3 = 16
// 16 ----- 4 = 20

// let arr = [1, 2, 3, 4];

// let result = arr.reduce((accumulator, current) => {
//     console.log(accumulator, current);
//     return  accumulator + current;
// }, 10);

// console.log(result)

// let friends = [
//     {
//         name: 'Anna',
//         books: ['Bible', 'Harry Potter'],
//         age: 21,
//     },
//     {
//         name: 'Bob',
//         books: ['War and peace', 'Romeo and Juliet'],
//         age: 26,
//     },
//     {
//         name: 'Alice',
//         books: ['The Lord of the Rings', 'The shining'],
//         age: 18,
//     },
// ]

// Expected Ans:
//-------------------
// allBooks = [
//     'Bible', 'Harry Potter','War and peace', 'Romeo and Juliet','The Lord of the Rings', 'The shining'
// ]
//

// let allBooks = friends.reduce((accumulator, current) => {
//     console.log(accumulator, current)
//     return [...accumulator, ...current.books]
// }, [])

// console.log(allBooks) //





// let names = ['Alice', 'Bob',  'Tiff', 'Bruce', 'Alice'];
// ans: {'Alice' : 2, 'Bob' : 1, 'Bruce': 1, 'Tiff' : 1}

// way 01
///------------------
// let countNames = names.reduce((allNames, name) =>{
//     console.log(allNames, name);
    // way 01
    ///------------------
    // if(name in allNames) {
    //     allNames[name] = allNames[name] +1;
    // }else {
    //     allNames[name] = 1;
    // }
    // return allNames;

      // way 02
    ///------------------
//     allNames[name] ??= 0;
//     allNames[name]++;
//     return allNames;

// }, {})

// console.log(countNames)



