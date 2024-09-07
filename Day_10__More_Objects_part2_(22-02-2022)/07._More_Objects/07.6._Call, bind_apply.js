/**
 * 7.6.Call, bind, apply
 * 
 * // if js fixed this that name implicit this binding
 * // we fixed this that explicit binding(call, bind, apply)
 * 
 * call() মেথড ফাংশনকে ইনস্ট্যান্টলি (তৎক্ষণাৎ) কল করে এবং প্রথম আর্গুমেন্ট হিসেবে যেটা দেওয়া হয়, সেটা this হিসেবে কাজ করে। পরের আর্গুমেন্টগুলো ফাংশনে পাস করা হয়।
 * apply() => apply() মেথডও call() এর মতোই কাজ করে, তবে এর পার্থক্য হলো, আর্গুমেন্টগুলোকে একটি array আকারে পাস করতে হয়।
 * bind()  => bind() মেথডটি জাভাস্ক্রিপ্টে ফাংশনকে একটি নির্দিষ্ট context (অর্থাৎ this) এর সাথে স্থায়ীভাবে যুক্ত করতে ব্যবহৃত হয়। এর মানে, যখন তুমি bind() ব্যবহার করে কোনো ফাংশন তৈরি করো, তখন সেই ফাংশনের this একটি নির্দিষ্ট object এর সাথে স্থায়ীভাবে সেট হয়ে যায়, যা পরে আর পরিবর্তন করা যায় না।
 * 
 */

//01. This inside method = object
//02. This in a constructor function some kind of object
//03. Otherwise -always indicate window


function greet(name, numb1, numb2, numb3) {
    console.log(this, name);
    return (`${this}  ${name}`);
}

// sayHi()
// console.log(greet('obaydul')); 

// console.log(greet.call('Hi', 'obaydul', 1, 2, 3)); // pass simple argument
// console.log(greet.apply('Hi', ['obaydul'])); // pass array sing all same call()
console.log(greet.apply('Hi', ['obaydul'])); // pass array sing all same call()


// bind
 
const boundGreet = greet.bind('hi', 'Obaydul');
console.log(boundGreet()); //


/**
 * bind() 
 */

let person = {
    name: 'Obaydulla',
    greet(greeting) {
        console.log(greeting + ', ' + this.name);
    }
};

let otherPerson = { name: 'Ayaan' };

// `greet` ফাংশনকে `bind()` করে `person` এর সাথে `this` স্থায়ীভাবে সেট করা হলো
let greetObaydulla = person.greet.bind(person, 'Hello');

greetObaydulla();  // Output: Hello, Obaydulla

// another example bind()
// ======================================

let car = {
    model: 'Tesla',
    displayModel: function() {
        console.log('Car model: ' + this.model);
    }
};

let bike = {
    model: 'Yamaha'
};

let showCarModel = car.displayModel.bind(car);
let showBikeModel = car.displayModel.bind(bike);

showCarModel();  // Output: Car model: Tesla
showBikeModel(); // Output: Car model: Yamaha

