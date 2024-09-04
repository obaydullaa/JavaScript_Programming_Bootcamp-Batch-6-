/**
 * 
  Exercise - 1 (What will be the result and explain why?) -3
 -------------------------------------------------------------------
        const x = 10;
        const y = "a"
        y === "b" || x >= 10
 */

// Ans:  1st part true so check 2nd part 2nd part is true so total result is true

// const x = 10;
//         const y = "a"
//        console.log( y === "b" || x >= 10)


/**
 * 
 Exercise - 2 (What will be the result and explain why?)-3
----------------------------------------------------------------
        const x = 3;
        const y = 8;

        !(x == "3" || x === y) && !(y != 8 && x <= y)

1st part  !(x == "3" || x === y) true
--------------------------------------
/Ans;
      x == "3"  =>  true;
      x === y   => false
     total result ====> false


2nd part  && !(y != 8 && x <= y) false &&  true = true  // short circuit 
-----------------------------------------------------
    y != 8  => false
    x <= y  => true
    total result  =====> false


 */

// const x = 3;
// const y = 8;

// console.log(!(x == "3" || x === y) && !(y != 8 && x <= y)); 

/**
 
# Exercise - 3(Check the value ans show output whether it's truthy or falsy ).What are the truthy and falsy value in Javascript -3

    "Hello World"
    "" 
    null 
    0 
    -1 
    NaN 

*/

// "Hello World" // true
// ""           // false
// null         // false
// 0             // false
// -1            // true
// NaN           // false



/**
 
 # Exercise - 4 (What will be the result and explain why?) Explain short circuit -4
---------------------------------------------------------------------------------------------
        const str = "haha!"
        const msg = ""
        const isFunny = "false"

        !(( str || msg ) || isFunny)


        ans: (str) it's  truthy value because its a string so it's truthy value and (msg) falsy  value  so no check after because || operator get true then no check another part;
        all result is ===> false

 */


/**
 # Exercise-5: when to use == vs === ? 
-----------------------------------------------
* 
*/

// Ans: 

// == only value compare 
// === value and data type compare;

/**
 # Exercise-6: operands++ vs ++operands //2
-----------------------------------------------------------------------
const a = 10
a++
++a
what are the differences between a++ and ++a
 */

//  Ans: 
// a++  // post increment
// ++a // Pre increment



/**
     # Exercise-7: What will be the result? and explain why? //2
    -----------------------------------------------------------------------
    10 / 2 * 5 
    what to do if I want to get the result of 1 after calculation?


 */

    // 10 / 2 * 5  // results will be 25;




    /**
        # Exercise-8: 
        Write down what the following statements will return. 
        Try to figure this out before putting the commands in the chrome console //2
    -----------------------------------------------------------------------------------------

        2 == "2"
        2 === 2
        10 % 3
        110 % 3
        true && false
        false || true
        false || true

 */
    // Ans: 
        // console.log(2 == "2");  // true  
        // console.log( 2 === 2); // true
        // console.log(10 % 3); //  1
        // console.log(110 % 3); // 2
        // console.log(true && false); // false 
        // console.log(false || true); // true