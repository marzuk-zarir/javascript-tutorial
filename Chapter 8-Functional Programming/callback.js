// Callback Function
/* callback function is a function which is stores in another function parameter */
function sample(a, b, cb) {
   var c = a + b
   var d = a - b
   var result = cb(c, d)
   return result
}
function add(a, b) {
   return a + b
}
function sub(a, b) {
   return a - b
}
function mul(a, b) {
   return a * b
}

console.log(sample(5, 6, add))
console.log(sample(5, 6, sub))
console.log(sample(5, 6, mul))
console.log(
   sample(5, 6, function (a, b) {
      return a / b
   })
)
