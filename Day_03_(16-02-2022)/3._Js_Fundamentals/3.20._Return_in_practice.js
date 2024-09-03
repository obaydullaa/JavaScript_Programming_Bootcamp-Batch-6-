/*
    The Return Keyword
*/

function profileBulderDynamic(firstName, lastName, age, job, learningFuture) {

    return `My name is ${firstName} ${lastName}. I a ${age}  I worked as a ${job}. I want to learn ${learningFuture}`;

}

const funcPutput = profileBulderDynamic('Obaydul', 'Islam', 24, 'web developer', 'machin learning'); // My name is obaydul Islam. I a 24, I worked as a web Devloper. I want to learn Machine Learning

console.log(funcPutput);