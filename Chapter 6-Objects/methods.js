var obj = {
   x: 10,
   y: 20,
   z: 30
}
// key method (returns object property in array)
console.log(Object.keys(obj)) // [ 'x', 'y', 'z' ]

// values method (returns object property's values in array) 
console.log(Object.values(obj)) // [ 10, 20, 30 ]

// entries method (returns object properties & values in two dimensional array)
console.log(Object.entries(obj)) // [ [ 'x', 10 ], [ 'y', 20 ], [ 'z', 30 ] ]

// assign method (it returns a copy of object.it won't harms properties of main object)
var obj2 = Object.assign({}, obj)
obj2.x = 100
obj2.y = 110
obj2.z = 120
console.log(obj)
console.log(obj2)