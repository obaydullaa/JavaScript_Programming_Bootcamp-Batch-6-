/**
 * 7.14.Date object
 */

const now = new Date();
let date = new Date(10000);

date = new Date('January 22, 2022 02:40:00');
date = new Date(2022, 01, 22, 02, 45, 50);
date.setFullYear(2010);
date.setMonth(2);
date.setUTCFullYear(12);

console.log(now);;