// ! inheritance very easy in ES6... but behind the scene it is prototypical inheritance... when we use constructor in parent class we should call super function in child class's constructor to use parent class's constructor
class Shape {
    constructor(color) {
        this.color = color
    }
    draw() {
        console.log('Drawing...')
    }
}
// ? inherit Shape Class
class Rectangle extends Shape{
    constructor(color, width, height) {
        super(color)
        this.width = width
        this.height = height
    }
}
let rect = new Rectangle('green', 40, 20)
console.log(rect)   // Rectangle {color: "green", width: 40, height: 20}

// ? inherit Shape Class
class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
}
let circle = new Circle('red', 10)
console.log(circle)  // Circle {color: "red", radius: 10}



// !===================== method overwrite =============================
// ? write method in child class's which is already declare in parent class to overwrite the method
class Square extends Shape{
    constructor(color, hand) {
        super(color)
        this.hand = hand
    }
    draw() {
        return 'Drawing a Square....'
    }
}
let sqr = new Square('purple', 5)
console.log(sqr)    // Square {color: "purple", hand: 5}
console.log(sqr.draw()) // Drawing a Square....
