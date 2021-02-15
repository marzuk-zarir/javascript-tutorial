// COMPARE TWO OBJECTS
var obj1 = {
    a: 20,
    b: 30,
}
var obj2 = {
    a: 20,
    b: 30,
}
console.log(obj1 === obj2) // false..bcz it compare objects memory location
if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true)
} else {
    console.log(false)
}

// another way     (real world object comparing method)
console.log(obj1)
console.log(JSON.stringify(obj1)) // it prints string object then we can compare two string
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) //true
