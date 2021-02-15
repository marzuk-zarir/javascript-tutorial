/* 
when we inherit a class...then we should reset child class's constructor....otherwise child class's constructor print parent class
*/

function Shape() {}
Shape.prototype = {
   common: function () {
      return 'I am from common method'
   },
}

// without reset child's constructor
function Square(width) {
   this.width = width
}
Square.prototype = Object.create(Shape.prototype)
Square.prototype.draw = function () {
   return 'I am from draw method'
}
var sqr = new Square(45)
console.log(sqr)






// with reset child's constructor
function Square2(width) {
   this.width = width
}
Square2.prototype = Object.create(Shape.prototype)
// reset
Square2.prototype.constructor = Square2
Square2.prototype.draw = function () {
   return 'I am from draw method'
}
var sqr2 = new Square2(45)
console.log(sqr2)
