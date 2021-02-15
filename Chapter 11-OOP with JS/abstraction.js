/* 
hide some features in class from user for secure our data is called Abstraction in OOP 
*/


// there is {private, public, protected} keyword in js..but we can declare a local variable as like private
var Rectangle = function (width, height) {
   this.width = width
   this.height = height
   // private object
   var position = { x: 45, y: -100 }

   // private function
   var printProperties = function () {
      console.log('My width is ' + width)
      console.log('My height is ' + height)
   }

   this.draw = function () {
      console.log('I am Rect')
      printProperties()
      console.log('Position X => ' + position.x + '\nPosition Y => ' + position.y)
   }
}

var rect1 = new Rectangle(30, 15)
rect1.draw()


// getPosition method(saw the object's private properties)

// built-in method / custom
var Rectangle2 = function (width, height) {
   this.width = width
   this.height = height
   // private object
   var position = { x: 45, y: -100 }

   // private function
   var printProperties = function () {
      console.log('My width is ' + width)
      console.log('My height is ' + height)
   }

   this.draw = function () {
      console.log('I am Rect')
      printProperties()
      console.log('Position X => ' + position.x + '\nPosition Y => ' + position.y)
   }

   // saw private property 
   this.getPosition = function () {
      return position
   }

   // custom get/set to private properties
   // defineProperty(class_name, 'custom_name', {method_declare})
   Object.defineProperty(this, 'position', {
      get: function () {
         return position
      },
      set: function (value) {
         return position = value
      }
   })
}

var rect2 = new Rectangle2
console.log(rect2.getPosition()) // built-in get
console.log(rect2.position)   // custom get

// set custom
rect2.position = {
   x: 454,
   y: 234
}
console.log(rect2.position)

