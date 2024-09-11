/**
 * 9.Avoid nested promise
 * -----------------------
 */

function one(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(1);
            // reject(new Error(1));
        }, 2000)

    }) 
}

function two(number){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(number + 2);
            // reject(new Error(2));
        }, 2000)
    }) 
}

function three(number){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(number + 3);
            // reject(new Error(3));
        }, 2000)
    }) 
}

//  
one() 
    .then((num1) => {
        console.log(num1); 
       return two(num1)
    })
    .then((num2 => {
        console.log(num2)
        return three(num2);
    }))
    .then((num3) => {
        console.log(num3)
    })
    .catch((err) => {
        console.log(err)
    })

// alternative 

//     let result = [];
// one() 
//     .then((num1) => {
//         console.log(num1); 
//         result.push(num1);
//        return  two()
//     })
//     .then((num2 => {
//         console.log(num2)
//         result.push(num2);
//         return three();
//     }))
//     .then((num3) => {
//         result.push(num3);
//         console.log(result);
//         console.log(num1 + num2 + num3);
//     })
//     .catch((err) => {
//         console.log(err)
//     })