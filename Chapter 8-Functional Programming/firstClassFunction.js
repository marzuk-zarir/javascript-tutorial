// !First Class Function
function add(a, b) {
    return a + b
}
// * 1. Function can be stored in a variable
var sum = add
console.log(sum(2, 4)) // 6
console.log(typeof sum) // function

// * 2. Function can be stored in a array
var arr = []
arr.push(add)
console.log(arr)    // [ [Function: add] ]
console.log(arr[0](4, 4)) // 8

// * 3. Function can be stored in a object
var obj = {
    sum: add,
}
console.log(obj)
console.log(obj.sum(4, 4)) // 8

// * 4. We can create function instantly as need
setTimeout(function () {
    console.log('I have created...')
}, 100)
