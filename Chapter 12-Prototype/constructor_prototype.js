// Constructor Function
function Person(name) {
   this.name = name
}

var ps1 = new Person()
var ps2 = new Person()

// this two are same prototype
console.log(Object.getPrototypeOf(ps1))
console.log(Person.prototype)
console.log(Object.getPrototypeOf(ps1) === Person.prototype) // true

// inherit PI in {Person} object's prototype
Person.prototype.PI = 3.1416
console.log(ps1)
console.log(ps2)

// inherit a custom function in Array object's prototype
Array.prototype.myMethod = function myMethod() {}
var arr = []
var arr2 = []
console.log(arr)
console.log(arr2)
