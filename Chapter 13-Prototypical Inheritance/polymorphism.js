// *! Polymorphism bengali meaning is 'bohurupi'
function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color) {
    this.color = color
}
Shape.prototype.common = function () {
    return 'I am common method'
}

// *Rectangle Class
function Rectangle(width, color) {
    this.width = width
    Shape.call(this, color)
}
extend(Shape, Rectangle)
Rectangle.prototype.common = function () {
    return "I am from Rectangle class's common method"
}

// *Circle Class
function Circle(radius, color) {
    this.radius = radius
    Shape.call(this, color)
}
extend(Shape, Circle)
Circle.prototype.common = function () {
    return "I am from Circle class's common method"
}

var shape = new Shape('black')
var rect = new Rectangle(20, 'purple')
var circle = new Circle(10, 'green')

// *? Polymorphism of common method
var objectsArray = [shape, rect, circle]
for (var i of objectsArray) {
    console.log(i.common())
}
/**
 *Todo:{for_in loop return object's/array's properties key}
 *Todo:{for_of loop return object's/array's properties value}
 */
