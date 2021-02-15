/* 
Functions are objects in javascript bcz:
1. every objects has a constructor. function has a constructor
2. function has properties
3. declare a function with constructor
*/

// 1
function test() {
   console.log('something')
}
console.log(test.constructor) // ƒ Function() { [native code] }
// 2
console.log(test.name, test.length)

// 3
var Rect = new Function(
   'width',
   'height',
   `this.width = width
this.height = height

this.draw = function () {
   console.log('I am a function')
   this.printProperties()
}
this.printProperties = function () {
   console.log(this.width)
   console.log(this.height)
}`
)
var rect = new Rect(4, 5)
console.log(rect)
console.log(rect.draw())
