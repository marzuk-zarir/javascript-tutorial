/**
 * ! (1) is a easy way to inheritance in javascript... but this it duplicate codes in line numbers 17, 18, 30, 31...we can solve this problem with create a new function(2)...
 */

// *!(1)
function Shape(color) {
    this.color = color
}
Shape.prototype.common = function () {
    console.log('I am common method')
}
// Rectangle Class
function Rectangle(width, color) {
    this.width = width
    Shape.call(this, color)
}
// duplicate codes
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.draw = function () {
    return 'I am from draw method'
}
// Circle Class
function Circle(radius, color) {
    this.radius = radius
    Shape.call(this, color)
}
// duplicate codes
Circle.prototype = Object.create(Shape)
Circle.prototype.constructor = Circle

Circle.prototype.draw = function () {
    console.log('I am from Circle draw method')
}
var rect = new Rectangle(40, 'green')
var circle = new Circle(20, 'red')
console.log(rect)
console.log(circle)




// *!(2)
function extend(Parent, Child) {
    Child.prototype = Object.create(Parent)
    Child.prototype.constructor = Child
}
// Rectangle2 Class
function Rectangle2(width, color) {
    this.width = width
    Shape.call(this, color)
}
extend(Shape, Rectangle2)
// Circle2 Class
function Circle2(radius, color) {
    this.radius = radius
    Shape.call(this, color)
}
extend(Shape, Circle2)
var rect2 = new Rectangle2(50, 'blue')
var circle2 = new Circle2(40, 'gray')
console.log(rect2)
console.log(circle2)