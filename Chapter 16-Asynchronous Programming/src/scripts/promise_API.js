// ! make a delay function for delay with promise
const delay = s => new Promise(resolve => setTimeout(resolve, s * 1000))
delay(6).then(() => console.log('6 seconds delay'))
delay(1).then(() => console.log('1 seconds delay'))
delay(4).then(() => console.log('4 seconds delay'))
delay(3).then(() => console.log('3 seconds delay'))
delay(2).then(() => console.log('2 seconds delay'))

//! resolve()
// * Promise.resolve method create a promise instantly and it is always resolved....thats why we should avoid catch block with this type of promise
let resolvePromise = Promise.resolve('resolved promise')
console.log(resolvePromise)   // Promise {<fulfilled>: "resolved promise"}
resolvePromise.then(v => console.log(v))    // resolved promise


//! reject()
// * Promise.reject method create a promise instantly and it is always reject....thats why we should avoid then block with this type of promise
let rejectPromise = Promise.reject('rejected promise')
console.log(rejectPromise)  // Promise {<rejected>: "rejected promise"}
rejectPromise.catch(e => console.log(e))    // rejected promise

//! all()
// * Promise.all method take a promises array as argument and it resolve when every promises resolve in promises array otherwise one or more promise rejected this method rejected whole promises array
let p1 = Promise.resolve('one')
let p2 = Promise.resolve('two')
let p3 = Promise.resolve('three')
let promiseArray = [p1, p2, p3]
Promise.all(promiseArray).then(arr => console.log(arr))
//? Promise.all method also show output when every promise resolve and none promise can't show output before every promises resolves in promise array
let p4 = new Promise(resolve => setTimeout(resolve, 5000, 'four'))
let p5 = new Promise(resolve => setTimeout(resolve, 3000, 'five'))
let p6 = new Promise(resolve => setTimeout(resolve, 4000, 'six'))
const promiseArray2 = [p4, p5, p6]
Promise.all(promiseArray2).then(arr => console.log(arr)) // none method isn't show output before all promises resolve

//! race()
//* Promise.race method play a race of promise array....which promise can resolve first he can resolve and other promises are reject
Promise.race(promiseArray2).then(v => console.log(v))   // five bcz it takes only 3 seconds