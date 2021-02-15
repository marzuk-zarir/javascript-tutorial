let obj = {
    a: 10,
    b: 20
}
// entries() method returns multi-dimensional array...see chapter 6
console.log(Object.entries(obj))  // [['a', 10], ['b', 20]]

// es6 feature
// fromEntries() returns object from multi-dimensional array 
let mArr = [
    ['a', 10],
    ['b', 20]
]
console.log(Object.fromEntries(mArr))   // {a: 10, b: 20}