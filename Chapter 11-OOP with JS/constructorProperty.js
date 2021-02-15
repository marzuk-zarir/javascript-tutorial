/* 
constructor is a function's reference which is used to made a object
constructor is not constructor pattern
*/

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
 console.log(rect3.constructor)