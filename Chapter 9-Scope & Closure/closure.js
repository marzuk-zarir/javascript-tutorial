// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

// 1. function is able to remember and access it's lexical scope
function test() {
    var x = 45
    function sample() {
        console.log(x)
    }
    sample()
}
test()

// 2. even when that function executing outside it's lexical scope
function test2() {
    var x = 45
    return function () {
        console.log(x)
    }
}
var sayMsg = test2()
sayMsg()

for (var i = 1; i <= 7; i++) {
  (function(n) {
    setTimeout(function () {
        console.log(n)
    }, n * 1000)
  })(i)
}