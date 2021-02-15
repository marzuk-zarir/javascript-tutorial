/**
 * ! Javascript is a Asynchronous programming language....
 * ! when we works with AJAX, file-system, database, web-api means when our works handle many processors js act as asynchronous behaviour.
 * ? in this code we maintain order but output can't maintain our order bcz setTimeOut is a async function
 * * async function always run at the last though setTimeOut function delay 0 second
 */
console.log('I am from line one')

setTimeout(() => {
    console.log('I am from line two')
}, 5000)

setTimeout(() => {
    console.log('I am from line three')
}, 0)

console.log('I am from line four')

setTimeout(() => {
    console.log('I am from line five')
}, 2000)
/* 
* output in javascript: 
I am from line one
I am from line four
I am from line three
I am from line five
I am from line two
*/
/* 
* output in synchronous language: 
I am from line one
I am from line two
I am from line three
I am from line four
I am from line five
*/