// *ES5 object literal syntax for same variable name and value assign
let a = 10
let b = 20

let obj = {
    a: a,
    b: b,
    print: function () {
        console.log(this)
    }
}
console.log(obj)

// *ES6 object literal syntax for same variable name and value assign
let obj2 = {
    a,
    b,
    print() {
        console.log(this)
    }
}
console.log(obj2)

