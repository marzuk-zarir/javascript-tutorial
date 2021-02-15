function Shape(color) {
    this.color = color
}
Shape.prototype.common = function () {
    console.log('I am common method')
}

function Rectangle(width, color) {
    this.width = width

    //*! super_call_method for use main class's function
    Shape.call(this, color)
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.draw = function () {
    return 'I am from draw method'
}

var rect = new Rectangle(20, 'green')
console.log(rect)
