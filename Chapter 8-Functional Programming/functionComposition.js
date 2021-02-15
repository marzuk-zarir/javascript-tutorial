/* input of first function is 2nd function's output is called function composition */
function print(inp) {
   console.log(inp)
}
function multiply(n) {
   return n * 5
}
function add(a, b) {
   return a + b
}
// function composition
print(multiply(add(4, 5)))    // 45
