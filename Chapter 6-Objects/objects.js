// object is a user define datatype.it is a special datatype

// student 1:
// math => 80
// chemistry => 88
// bangla => 66
// english => 78

// array
// [80,88,66,78]

/*
var obj = {
   properties : value,
   properties : value
}
*/
/*
// literal style
var obj = {
    a: 20,
    b: 30,
}
obj.z = 50
console.log(typeof obj)
console.log(obj)

// constructor style
var obj2 = Object()
obj2.a = 20
obj2.b = 30
obj2.z = 50
console.log(obj2)

// OOP style
var obj3 = new Object()
obj3.a = 20
obj3.b = 30
obj3.z = 50
console.log(obj3)
*/

/*
var obb = {
    x: 30,
    y: 20,
    z: 15,
}
// ACCESSING OBJECT PROPERTIES
// dot notation
console.log(obb.x)
console.log(obb.y)
console.log(obb.x + obb.z)
console.log('')

// array notation {object_name['properties_name']}
console.log(obb['x'])
console.log(obb['y'])
console.log(obb['x'] + obb['z'])
var show = 'x'
console.log(obb[show])
*/

// SETTINGS OBJECTS PROPERTIES
var obb = {
    x: 30,
    y: 20,
    z: 15,
}
// updating properties
obb.x = 40
console.log(obb)
console.log(obb.d)
obb['z'] = 20
var prop = 'z'
console.log(obb.z)

// remove properties
delete obb.z  // delete operator
console.log(obb)