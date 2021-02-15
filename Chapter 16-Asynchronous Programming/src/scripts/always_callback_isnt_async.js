/**
 *!  mainly callback complete two tasks: 
 ** 1. add a function in another function's argument 
 ** 2. handle asynchronous task
 */

//? normal way....create a function instantly in another function's argument.... it is not join with async
const arr = [1, 2, 3, 4, 5]
let arrSqr = arr.map(v => v * v) 
console.log(arrSqr) // [1, 4, 9, 16, 25]

//? handle async task
function asyncMap(arr, cb) {
    return arr.map(v => {
        setTimeout(cb.bind(this, v), 0)
    })
}
let qbArr = asyncMap(arr, v => v * v * v)
console.log(qbArr)  // [undefined, undefined, undefined, undefined, undefined]

// use callback for solve this problem
asyncMap(arr, v => {
    console.log(v * v * v)
})