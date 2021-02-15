/* 
Prototype is a parent class in js....{Object} is the last stage of prototype
*/

var obj = {}
console.log(obj)

var obj2 = new Object()
console.log(obj2)

// obj, obj2's prototype is {Object}. this two are inherit {Object}
var checkPrototype = Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2)
console.log(checkPrototype) // true

// multilevel inheritance(arr --> Array --> Object)
var arr = []
console.log(arr)

// (person1 --> Person --> {Object})
function Person(name) {
   this.name = name
}
var person1 = new Person('Marzuk')
console.log(person1)
