/**
 * 4.closer scope
 * ------------------------------
 *  Bubble Up (nice thake uporer thak search korte korte jai )
 */


a = 10 ;

function printName() {
    let firstName = 'Obaydulla';
   return function inner(lastName) {
       return firstName + ' ' + lastName;
    }
}


let partialPrintName = printName()


console.log(partialPrintName('Hasan'))

