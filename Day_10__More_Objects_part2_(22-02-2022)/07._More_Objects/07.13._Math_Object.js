/**
 * 7.13.Math Object
 */
/**
 * ceil
 * floor
 * random
 * abs
 * round
 */

console.log(Math.floor(Math.random() * 10000))
console.log(Math.floor(Math.random() * 10000))

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
console.log(getRandomInt(5, 10));