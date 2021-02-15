// ! Symbol is a primitive data type which is added in es6. Symbol data declare a data for unique identification.... identical or equal-to compare of two symbol's are always false


let n = 'marzuk'
let n2 = 'marzuk'
console.log(n === n2)   // true


// * we can declare a symbol with symbol(optional_description) function
let s1 = Symbol('marzuk')
let s2 = Symbol('marzuk')
console.log(s1) // Symbol(marzuk)
// *identity check
console.log(s1 === s2)  // false
console.log(typeof s1)  // symbol
