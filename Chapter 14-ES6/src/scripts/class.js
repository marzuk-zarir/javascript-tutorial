// ! there is no class in javascript but class is added in ES6 and class is not a new term in javascript behind the scene ES6 is convert in ES5... So, it is a syntactical sugar only and class is a only Constructor Function

// ?Constructor Function
function Rectangle(width, height) {
    this.width = width
    this.height = height
}
Rectangle.prototype.draw = function() {
    console.log(this)
    console.log('Drawing')
}
let rect = new Rectangle(20, 10)
console.log(rect)   // Rectangle {width: 20, height: 10}

// ?Class
/**
 * simple class syntax:
 * *class className {
 * *  constructor(which data should provide when creating a object by using this class){
 * *     code...
 * *  }
 * *}
*/
class Rectangle2 {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    draw() {
        console.log(this)
        console.log('Drawing')
    }
}
let rect2 = new Rectangle2(20, 10)
console.log(rect2)  // Rectangle {width: 20, height: 10}
console.log(typeof Rectangle2)  // function ----- not class :) 