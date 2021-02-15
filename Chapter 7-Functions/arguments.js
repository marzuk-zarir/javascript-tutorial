/*
function add(a, b) {
    var result = a + b
    console.log(result)
}
add(11, 200)
add(20, 30)

var arr = [1, 3, 5]
var arr2 = [7, 5, 9]
var arr3 = [3, 6, 10]

function arrayAdd(arr) {
   var sum = 0
   for (i = 0; i < arr.length; i++) {               
     sum += arr[i]
   }
   console.log(sum)
}
arrayAdd(arr2)
*/

//============== ARGUMENTS OBJECT ===============/
console.log(
    'arguments is a array type object which contains all parameter of a user defined function.'
)
// function test(a, b, c) {
//     console.log(arguments)
// }
// test()
function test(a, b, c) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
test(10, 20, 30)

console.log(
    'we can access without declaring parameters in our function when parameters numbers are not defined & add operation with {arguments} object'
)
function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
addAll(2, 3, 55, 78)
addAll(3, 791, 929, 1991, 3, 3, 4, 67, 23)
