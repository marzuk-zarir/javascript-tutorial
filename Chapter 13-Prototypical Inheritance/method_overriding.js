function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}
function Shape(color) {
    this.color = color
}
Shape.prototype.common = function () {
    return 'I am from common method'
}

// *Rectangle class
function Rectangle(width, color) {
    this.width = width
    Shape.call(this, color)
}
extend(Shape, Rectangle)
Rectangle.prototype.draw = function () {
    return 'I am draw method from Rectangle class'
}

// *Circle class
function Circle(radius, color) {
    this.radius = radius
    Shape.call(this, color)
}
extend(Shape, Circle)
// *Override {common} method
Circle.prototype.common = function () {
    return 'I am from Circle common method'
}
/* // *add new feature in existing method
Circle.prototype.common = function () {
    Shape.prototype.common.call(this)
    return 'I am from Circle common method'
} */

var rect = new Rectangle(20, 'white')
var circle = new Circle(30, 'black')
console.log(rect.common())
console.log(circle.common())
