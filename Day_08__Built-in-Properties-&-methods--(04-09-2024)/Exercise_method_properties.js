/**
 * //total Number-20
 * ===========================
 */

/**
 * Exercise-1: (3)
 */
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
// function myFunction(a, b) {
//     return
//   }
  
//   myFunction('cheese', 'cake') //'cheesecake'
//   myFunction('lips', 's') //'slips'
//   myFunction('Java', 'script') //'Javascript'
//   myFunction(' think, therefore I am', 'I') //'I think, therefore I am'

  // function myFunction(a, b) {
  //   const storeResult = (a + b);
  //   return  storeResult;
  // }

  // myFunction('cheese', 'cake') //'cheesecake'
  // myFunction('lips', 's') //'slips'
  // console.log(myFunction('Java', 'script')) //'Javascript'
  // myFunction(' think, therefore I am', 'I') 

  /**
   * //Exercise-2:(3)
    // Write a function that takes two strings (a and b) as arguments
    // Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
    // Return the resulting string

    function myFunction(a, b) {}

    myFunction('1234567', '.') //'1.234.567'
    myFunction('abcde', '$') //'ab$cde'
    myFunction('zxyzxyzxyzxyzxyz', 'w') //'zwxyzwxyzwxyzwxyzwxyz'

*/


// function myFunction(a, b) {
    
// }

// myFunction('1234567', '.') //'1.234.567'
// myFunction('abcde', '$') //'ab$cde'
// myFunction('zxyzxyzxyzxyzxyz', 'w') //'zwxyzwxyzwxyzwxyzwxyz'

// function myFunction(a, b) {
//   let result = ''; 
//   let counter = 0; 



function myFunction(a, b) {
    let result = '';
    let counter = 0;

    for (let i = a.length - 1; i >= 0; i--) {
      result = a[i] + result;
      counter++;
      
      ;
      if (counter === 3 && i !== 0) {
        result = b + result;
        counter = 0;
      }
    }

    return result;
}

console.log(myFunction('1234567', '.')) //'1.234.567'
console.log(myFunction('abcde', '$')) //'ab$cde'
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')) //'zwxyzwxyzwxyzwxyzwxyz'