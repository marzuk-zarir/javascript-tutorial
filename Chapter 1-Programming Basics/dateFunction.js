var date = new Date()

console.log(date.toDateString()) // Fri Dec 18 2020

console.log(date.toTimeString()) // 22:36:57 GMT+0600 (Bangladesh Standard Time)

console.log(date.toLocaleString()) // 12/18/2020, 10:37:47 PM

console.log(date.getFullYear()) // 2020 returns now year

// month counts from 0
console.log(date.getMonth()) // 11(December) returns now month

// day starts from for sunday(0)
console.log(date.getDay()) // 5(friday) returns number of day of weak

console.log(date.getDate()) // 18   returns now months date

console.log(date.getHours()) // 22    returns now hour

console.log(date.getMinutes()) // 57    returns now minutes

console.log(date.getSeconds()) // 23     returns now seconds

console.log(date.getMilliseconds()) // 793    returns now milliseconds
