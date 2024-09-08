/**
 * 1.Understanding function parameter and argument orders
 */

function greet(greetMsg = 'Hello', name = 'Obaydulla') { // parameter
   return `${greetMsg} ${name}`;
}


console.log(greet(undefined, 'Obaydulla')); // argument


let arr = ['obaydul ', 'anis ', 'karim'];


function printNames(names) {
   // console.log(names);
   let outputNames= '';
   for(let name of names) {
      outputNames += name;
      console.log(name)
   }
   return outputNames;
}

console.log(printNames(arr));