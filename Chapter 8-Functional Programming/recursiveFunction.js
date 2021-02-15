/* 
Most Important Function
Difficult to Understand
*/

// print a string for 10 times without using forLoop

// Recursive Function
function sayHi(n) {
   if (n === 0) {
      return
   }
   console.log(n + ': ' + 'I am a recursive function')
   sayHi(n - 1)
}
sayHi(10)
/* 
10: I am a recursive function
9: I am a recursive function
8: I am a recursive function
7: I am a recursive function
6: I am a recursive function
5: I am a recursive function
4: I am a recursive function
3: I am a recursive function
2: I am a recursive function
1: I am a recursive function
*/

// summation of {n}
function sum(n) {
   if (n === 1) {
      return 1
   }
   return n + sum(n - 1)
}
console.log(sum(10)) // 55

// factorial of {n}
function fact(n) {
   if (n === 1) {
      return 1
   }
   return n * fact(n - 1)
}
console.log(fact(5)) // 120

// array summation
function sumOfArray(arr, lastIndex) {
   if (lastIndex < 0) {
      return 0
   }
   return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}
var arr = [1, 2, 3, 4, 5]
console.log(sumOfArray(arr, arr.length - 1)) // 15
