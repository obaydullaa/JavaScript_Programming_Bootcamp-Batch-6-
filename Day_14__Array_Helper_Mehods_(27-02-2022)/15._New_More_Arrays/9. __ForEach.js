
/**
 * 9. ForEach
 *----------------------------
 forEach() হলো একটি array method যা প্রতিটি এলিমেন্টের উপর দিয়ে loop চালায় এবং প্রত্যেকটি এলিমেন্টের জন্য একটি ফাংশন এক্সিকিউট করে। 
 এটা array এর প্রতিটি এলিমেন্টে একবার করে callback function চালাবে।
 
 forEach() কোনো return মান দেয় না। অর্থাৎ এটি array এর প্রতিটি এলিমেন্ট নিয়ে কাজ করলেও নতুন array বা value তৈরি করে না।
 */

 let arr = [1, 2, 3, 4];

 let results = [];

 arr.forEach((elm) => {
   results.push(elm * 2);
  console.log(results)
  return results;
});


console.log(results)