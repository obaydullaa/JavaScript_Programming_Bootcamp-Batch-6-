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


const profile = {
    fistName: 'obaydul',
    lastName: 'Islam',
    email: 'obaydul@gmail.com',
    personTitle: 'Mr',
    fullName() { // Modal js
        console.log(this);
        let that = this;
        return function () {
            return that.personTitle + ' ' + that.fistName + ' ' + that.lastName;
        }
    }
}

const innerFunc = profile.fullName();
console.log(innerFunc.call(profile));
console.log(innerFunc(profile));

