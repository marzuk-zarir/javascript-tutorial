var str = '1000'
var n = 10

// string to number conversion
console.log(Number.parseInt(str))
console.log(Number.parseInt(str) + n)

// number to string conversion
console.log(n.toString())

// infinity can't convert to number but infinity can convert to string
console.log(Number(Infinity))
console.log(Infinity.toString())
console.log(Boolean(-Infinity))

//Falsy Value::

// ''(empty string)
// 0 or -0
// null
// undefined
// NaN

console.log(Boolean(''))
console.log(Boolean('arak'))

console.log(Boolean(null))
console.log(Boolean(undefined))

console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(453))

// constructor
String
Number
Boolean
