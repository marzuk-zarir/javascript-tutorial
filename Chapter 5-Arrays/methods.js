var arr = [9, 6, 2, 4, 8, 3]

// join method(returns string)
console.log(arr.join('\n')) // join(printing separator)
console.log(arr.join(' ')) // 9 6 2 4 8 3

// fill method
console.log(arr.fill(true)) // [ true, true, true, true, true, true ]

// concat method
var arr2 = [44, 7, 8, 49, 82]
var arr3 = [3, 84, 73, 94, 6, 6]
var arr4 = arr3.concat(arr2) // returns concat array
console.log(arr4)

// Array.isArray()
console.log(Array.isArray(arr)) // true

// Array.from()
var a = [1, 2]
var b = Array.from(a) // it returns a copy of array.it won't harms elements of main array
b[0] = 5 // array b[0] is 5 but a[0] is not 5
console.log(a)
console.log(b)
