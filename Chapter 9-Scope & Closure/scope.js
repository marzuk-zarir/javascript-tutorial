// global scope
var x = 55
function test() {
    // local scope for this function
   var x = 44
   console.log(x)
}
test()  // 44
// local scope's precedence is higher than its parent's scope..that's why when we call x it returns 44

/* =========== Nested Scope =========== */
function parent() {
    var x = 47
    function child() {
        var x = 48
        console.log(x)
    }
    child()
}
parent()    // 48
// child can access his infinity parent's variables but parent can't access his child's variables

/* ============ Lexical Scope =============== */
// lexical terms comes from compiler's lexin phase. when compiler tokenize a element for who can access his parent's element it calls lexical scope

var a = 11
function A() {
   var b = 12

   function B() {
      var c = 23
      console.log(c)
   }

   function C() {
      var d = 56
      console.log(d)
   }

   console.log(b)
   D(b)
   B()
   C()
}

function D(n) {
   return n + a
}

/* 
Scope Chain:
-----------
A() -> a, b, B(), C(), D()
B() -> a, b, c, B(), C(), D()
C() -> a, b, d, B(), C(), D()
D() -> n, a, A()
*/
