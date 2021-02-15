// JavaScript Inheritance's Style

// main class
function Shape() {}
Shape.prototype = {
   common: function () {
      return 'I am from common method'
   }
}



// inherit main class {sqr -> Square -> Shape -> Object}
function Square(width) {
   this.width = width
}
Square.prototype = Object.create(Shape.prototype)
Square.prototype.draw = function () {
   return 'I am from draw method'
}
var sqr = new Square(45)
console.log(sqr)



// inherit main class {circle -> Circle -> Shape -> Object}
function Circle(radius) {
   this.radius = radius
   return 'Circle Radius = ' + this.radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.draw = function () {
   return 'I am from circle drawing method'
}
var circle = new Circle(20)
console.log(circle)



// inherit main class {rect -> Rectangle -> Shape -> Object}
function Rectangle(width, height) {
   this.width = width
   this.height = height
   return "Rectangle's width is " + this.width + ' & height is ' + this.height
}
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.draw = function () {
    return 'I am from rectangle drawing method'
}
var rect = new Rectangle(40, 20)
console.log(rect)