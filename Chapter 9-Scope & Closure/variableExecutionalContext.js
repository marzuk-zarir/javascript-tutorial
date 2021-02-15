var a = 10
console.log(a)

var b
console.log(b)
var b = 20

console.log(c)
var c = 50

/* 
Creation Phase:
--------------
var a = undefined
var b = undefined
var c = undefined

Executional Phase:
-----------------
a = 10
console.log(a)      // 10

console.log(b)      // undefined
b = 20

console.log(c)      // undefined
c = 50

that's why we should declare variable before print or operation
*/