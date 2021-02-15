// !Higher Order Function

// *1. we can pass a function as argument
// *2. we can return function from another function

function add(a, b) {
    return a + b
}
function manipulate(a, b, func) {
    var c = a + b
    var d = a - b
    return function () {
        var e = func(a, b)
        return c * d * e
    }
}

var g = manipulate(3, 4, add)
console.log(g())
