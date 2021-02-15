/* 
!OOP stands for main four pilar:
------------------------------
*1. Abstraction : 
hiding unnecessary details from users is called Abstraction

*2. Encapsulation :
encapsulation is a idea of a bundling data and method that work on that data for one unit

*3. Inheritance :
inheritance is a common class witch contains common data & methods of many classes. it can access from many classes and it is prevent code duplication

*4. Polymorphism :
polymorphism means multi variety like as

class rect {
   constructor(width, height) {
      this.width = width
      this.height = height
   }
   calculateArea() {
      return this.width * this.height
   }
   calculateRange() {
      return 2 * (this.width + this.height)
   }
}
// make many many objects
var rect1 = new rect(10, 20)
var rect2 = new rect(30, 40)
var rect3 = new rect(5, 6)
*/