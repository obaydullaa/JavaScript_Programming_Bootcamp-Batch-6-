/**
 * 6.More closure
 * ------------------------------
 *  Bubble Up (nice thake uporer thak search korte korte jai )
 */
// inner ফাংশনটি return হয় এবং partialPrintName এ সংরক্ষিত হয়। তবে এটা গুরুত্বপূর্ণ যে, inner ফাংশনের সাথে সাথে firstName ভ্যারিয়েবলও scope এর কারণে মেমোরিতে থেকে যায়, অর্থাৎ inner ফাংশন firstName এর মান জানে এবং এটা যেকোনো সময় ব্যবহার করতে পারে।
// inner ফাংশনের এই আচরণকে বলা হয় closure। Closure মানে হচ্ছে, একটি ফাংশন তার চারপাশের scope-এর ভ্যারিয়েবলগুলোর অ্যাক্সেস রাখে, এমনকি যখন সেই ফাংশনটি তার মূল স্কোপের বাইরে কল করা হয়।




// maintaining state
// caching , memoization
function calCulate(num) {
    console.log('heavy calculation ')
    let result = 100000 * 100000;
    return (num) => {
       return result + num;   
     }
    
}

let calc = calCulate();  


console.log(calc(10));  
console.log(calc(100));  
console.log(calc(1000));  
console.log(calc(10000));  
