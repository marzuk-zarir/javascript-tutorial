// what is closure
/* when a function hires other function's data we can call it closure */

function a() {
   var x = 50
   return function () {
      console.log(x)   // this function hires other function's data as a closure
   }
}
var test = a()
console.log(test)    // Open with Browser