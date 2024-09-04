/**
 * 6.11.Exercise-loop
 */

/**
 * Exercise-01 (See the output and Let's explain)
 =========================================================
 Explain: It's first of all check num less then 10 then Execute num + 2, that's mean 1+3 = 3
 */

let num = 1;

while (num <= 10) {
    console.log(num);
    num += 2;
}

/**
 * Exercise-02 (See the output and Let's explain)
 =========================================================
 Explain: first while condition is true then go to if block and num++ % 4 that's mean 
 */

let num2 = 1;

while (num2 <= 20) {
    if (num2 % 4 === 0) {
        console.log(num2);
    }
    num2++;
}

/**
 * Exercise-03 (See the output and Let's explain)
 =========================================================
 */

let num3 = 100;

while (num3 < 150) {
    console.log(num3 + 1);
    num3++;
}

/**
 * Exercise-04 (See the output. May require id condition inside loop )
 ========================================================================
 Print out all even numbers between 1 and 100. Write two solutions: One with a while loop and one with a for loop
 */






/**
 * Exercise-05 ( Run loop and add $ in each repetition)
 ========================================================================

$
$$
$$$
$$$$
$$$$$
$$$$$$

 */




/**
* Exercise-06 ( See the output and Let's explain)
========================================================================

Write a program that Prints the numbers from 1 o 100. But for mulitiples of three prin "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are mulitples of both three and five print "FizzBuzz".
1
3
Fizz
4
Buzz
7
8
Fizz
13
14
FizzBuzz

*/