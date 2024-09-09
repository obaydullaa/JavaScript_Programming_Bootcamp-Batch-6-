/**
 * 5.closure practical use
 * ------------------------------
 *  Bubble Up (nice thake uporer thak search korte korte jai )
 */
// inner ফাংশনটি return হয় এবং partialPrintName এ সংরক্ষিত হয়। তবে এটা গুরুত্বপূর্ণ যে, inner ফাংশনের সাথে সাথে firstName ভ্যারিয়েবলও scope এর কারণে মেমোরিতে থেকে যায়, অর্থাৎ inner ফাংশন firstName এর মান জানে এবং এটা যেকোনো সময় ব্যবহার করতে পারে।
// inner ফাংশনের এই আচরণকে বলা হয় closure। Closure মানে হচ্ছে, একটি ফাংশন তার চারপাশের scope-এর ভ্যারিয়েবলগুলোর অ্যাক্সেস রাখে, এমনকি যখন সেই ফাংশনটি তার মূল স্কোপের বাইরে কল করা হয়।


// function printName() {
//     let firstName = 'Obaydulla';
//    return function inner(lastName) {
//        return firstName + ' ' + lastName;
//     }
// }


// let partialPrintName = printName()


// console.log(partialPrintName('Hasan'))

// to protect variable, data 
function gamePlay(num) {
    let lifeSpan = num;
    return () => {
        console.log('.....Playing....');
        lifeSpan--;
        console.log('....Remaining Playing life....', lifeSpan);
    }
    return play;  
}

let play = gamePlay(4);  
console.log(play());  
