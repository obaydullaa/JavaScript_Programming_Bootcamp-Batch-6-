/**
 *  6.spread operator and arguments in function
 * 
 */

// For Function 


// function printProfile(...data) {
//     console.log(data)
//     console.log(data[0].firstName)
// }

// const profile = {
//     firstName: 'obaydul',
//     lastName: 'Islam',
//     email: 'obaydul@gmail.com',
//     personTitle: 'Mr'
// }

// console.log(printProfile(profile))

function printProfile(...data) {
   console.log(data)

   for(let elm of data) {
        console.log(elm)
   }
   console.log(arguments) // it see array but not array it's like array  object
}



console.log(printProfile('obaydul', 'Islam', 'Front-end Developer'))