// default parameter
// *in ES5
function sqr(n) {
    if (!n) {
        n = 1  // default parameter
    }
    return n * n    
}
console.log(sqr())  // 1

function sqr2(n) {
    n = n || 2   // default parameter
    return n * n
}
console.log(sqr2()) // 4

// *in ES6
function sqr3(n = 3) {
    return n * n
}
console.log(sqr3())  // 9

/**
 * note: when we use default parameter we can't provide null or undefined in function parameter otherwise it throws a error
 */
/* function greet(name = 'Marzuk', msg = 'hello') {
    console.log(name.length)
    console.log(`${msg}! I am ${name}`)
}
greet(null, 'good morning')    // error
*/