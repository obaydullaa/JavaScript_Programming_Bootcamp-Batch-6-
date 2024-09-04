/*
 ** Functions Practice 
 */

function profileBulder() {
    console.log('My name is obaydul Islam. I a 24, I worked as a web Devloper. I want to learn Machine Learning');

}
profileBulder();

function profileBulderDynamic(firstName, lastName, age, job, learningFuture) {
    console.log('My name is ' + firstName + ' ' + lastName + '. I a ' + age + ', I worked as a ' + job + '. I want to learn ' + learningFuture + '');

}
profileBulderDynamic('Obaydul', 'Islam', 24, 'web developer', 'machin learning'); // My name is obaydul Islam. I a 24, I worked as a web Devloper. I want to learn Machine Learning
profileBulderDynamic('Karim', 'Islam', 24, 'Graphic Designer', 'Ui/UX Design');