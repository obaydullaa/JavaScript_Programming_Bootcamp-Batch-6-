/**
 * 5.8. Exercise
 */

/**
 Use both if and switch statement
 =====================================
    age: less than 10
    output: stay home under your mom supervision

    age: more and equal then 10 and less then 15
    output: Try to gain knowledge from outside of home

    age: more than and equal to 15 and less than 18
    output: prepare to cast vote

    age: more then 18
    output: cast you vote

    age: unknown
    output: You are out of range

 */

const age = 16;

if (age < 10) {
    console.log('stay home under your mom supervision');
} else if (age >= 10 && age < 15) {
    console.log('Try to gain knowledge from outside of home');
} else if (age >= 15 && age < 18) {
    console.log('prepare to cast vote');
} else if (age > 18) {
    console.log('cast you vote');
} else {
    console.log('You are out of range');
}

switch (age) {
    case 10:
        console.log('stay home under your mom supervision');
        break;
    case 15:
        console.log('Try to gain knowledge from outside of home');
        break;
    case 18:
        console.log('prepare to cast vote');
        break;
    case 19:
        console.log('cast you vote');
        break;
    default:
        console.log('You are out of range');
}