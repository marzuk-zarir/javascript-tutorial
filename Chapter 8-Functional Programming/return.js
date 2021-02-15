function greet(msg) {
   function greetings(name) {
      return msg + ', ' + name + '!'
   }
   return greetings
}

var gm = greet('Good Morning')
console.log(gm('Marzuk Zarir'))

var gn = greet('Good Night')
console.log(gn('M'))

var hello = greet('Hello')
console.log(hello('Z'))

// Power Return like as Math.pow()
function power(n) {
   return function (a) {
      var result = 1
      for (var i = 0; i < n; i++) {
         result *= a
      }
      return result
   }
}
var base = power(3)
console.log(base(10)) // 1000
// important
console.log(10 ** 3)  // power operator{base ** power}
