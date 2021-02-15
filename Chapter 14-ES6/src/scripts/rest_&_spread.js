// note:arguments object returns arguments of this function
// *in ES5 unlimited parameter define
function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sum(1, 2, 23, 3)) // 29

// ? Rest Operator
/**
 * ?in ES6 unlimited parameter define with rest operator
 * !rules:
 * !1. rest operator should add in last arguments
 */
function sum2(...a) {
    return a.reduce((prev, cur) => prev + cur)
}
console.log(sum2(1, 2, 3, 5)) // 11

// ? Spread Operator
// ?spread operator iterate a array
let arr = [1, 4, 3, 92, 29]
console.log(...arr)

let obj = {
    a: 10,
    b: 20,
    c: 30
}
// ?spread operator can create a new object with existing object's value without store reference
// let obj2 = {
//     ...obj
// }
