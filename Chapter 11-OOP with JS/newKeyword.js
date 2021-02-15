/* 
This Video will be watch after completing prototype & apply,call,blind method
*/

// {new} keyword returns a empty object and binding all properties&methods in this empty object for constructor pattern

// build in new shorthand
var Rectangle = function (width, height) {
   this.width = width
   this.height = height

   this.draw = function () {
      console.log('I am Constructor Rect')
      this.printProperties()
   }
   this.printProperties = function () {
      console.log(this.width)
      console.log(this.height)
   }
}

var rect3 = new Rectangle(10, 5)
console.log(rect3.draw())



// custom myNew function same as new shorthand
function myNew(constructor) {
   var obj = {}
   Object.setPrototypeOf(obj, constructor.prototype)

   var argsArray = Array.prototype.slice.apply(arguments)
   constructor.apply(obj, argsArray.slice(1))

   return obj
}

var rect4 = myNew(Rectangle, 10, 5)
console.log(rect4.draw())
