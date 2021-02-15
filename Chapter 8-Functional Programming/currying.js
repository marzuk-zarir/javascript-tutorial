// General function declaration
function add(a, b, c) {
   return a + b + c
}
console.log(add(10, 5, 15)) // 30

// Currying Function Declaration
function curAdd(a) {
   return function (b) {
      return function (c) {
         return a + b + c
      }
   }
}
var result = curAdd(10)(5)(15)   // currying function calling
console.log(result)     // 30
