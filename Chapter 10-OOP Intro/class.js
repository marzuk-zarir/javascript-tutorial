console.log(
   'Class is a factory to create multiple object without code duplication'
)
console.log('')
console.log('CLASS is template which is used for make many many OBJECTS')
console.log('')

// class declaration
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

console.log(rect1.calculateArea()) // 200
console.log(rect1.calculateRange()) // 60

console.log(rect2.calculateArea()) // 1200
console.log(rect2.calculateRange()) // 140

console.log(rect3.calculateArea()) // 30
console.log(rect3.calculateRange()) // 22
