// general function
function add(a, b) {
    return a + b
}

// anonymous function which is a expression
var addition = function (a, b) {
    return a + b
}
console.log(addition(2, 10))

// set timeout(build in)
setTimeout(function () {
    console.log('I will call after 5 seconds')
}, 5000) // 1000 milliseconds = 1 second

// we can also passes(not call) a anonymous function in another variable
var another = addition
console.log(another(10, 20))

console.log(
    'This console.log declare after setTimeOut function but it runs before setTimeOut function for JavaScript Assingncronus behaviour'
)
