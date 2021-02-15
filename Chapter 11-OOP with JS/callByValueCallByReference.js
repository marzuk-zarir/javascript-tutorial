// Pass by Value Vs Pass by Reference
// Call by Value Vs Call by Reference

// call/pass by value which works in primitive data types
var n = 10
function change(n) {
   n += 100
   console.log(n)
}
change(n) // 110
console.log(n) // 10


// call/pass by reference which works in object data types(array, function, object)
var obj = {
   a: 10,
   b: 20,
}
function changeObj(o) {
   o.a += 100
   o.b += 100
   console.log(o)
}
changeObj(obj) // {a: 110, b: 120}
console.log(obj) // {a: 110, b: 120}
