/**
 * 07.15 exercise
 */

/**
 * Exercise => 01
 =====================
  Max of define a function that output max of two function.
 function max(a, b){
     // ToDo
 }
    max(10, 15);

 */
function max(a, b) {
    console.log(Math.max(a, b)); // 50
}
max(10, 50);


/**
 * Exercise => 02
 =====================
  Show numbers in between with the types

function showNumber(num){
    // Todo
}
showNumber(10);

copy
----------

//Exercise2
let c1=0;
function showNumber(c){
  for(c1=0; c1<=c; c1++){
    console.log(c1);
    c1++;
    return c;
  }
}
console.log(showNumber(10));

1.
function showNumber(num){
for (let i = 0; i < num; i++){
console log(i);
}
}
showNumber(10);
 */

function showNumber(num) {
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
}
showNumber(10);



/**
 * Exercise => 03
 =====================
 Sum of all numbers up to passed limit

function sum(num){
    // Todo
}
sum(10);

 */

function sum(num) {
    console.log(num + num);
}
sum(5);





/**
 * Exercise => 04
 =====================
 Calculate AVerage
 <60-F
 60-69
 70-79
 80-89
 >90-A

 function calculateAverage(arr){
     // ToDo
 }
calculateAverage(60, 90, 50, 55);

 */

function calculateAverage(arr) {
    if (arr < 60) {
        console.log('You are Failed');
    } else if (arr > 69) {
        console.log('You are Get 60 - 69 numbers');
    } else if (arr > 79) {
        console.log('You are Get 69 - 79 numbers');
    } else if (arr > 89) {
        console.log('You are Get 79 - 89 numbers');
    } else if (arr > 90) {
        console.log('You Get A');
    } else {
        console.log('You Are Wrong');
    }
}
calculateAverage(60, 90, 50, 55);






/**
 * Exercise => 05
 =====================
 Show properties of only value of stringtype
 
 const movie = {
     title: 'a',
     releaseYear: 2020,
     rating: 4.5;
     director: 'b',
 };


 function showProperties(mobieData){
     // ToDo
 }
showProperties(movie);

 */