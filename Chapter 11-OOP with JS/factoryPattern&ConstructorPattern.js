/* 
There is no Class in JavaScript but there is two pattern(factory_pattern, constructor_pattern) in JS Which works like Class
*/

// Factory Pattern
var createRect = function (width, height) {
   return {
      width: width,
      height: height,

      draw: function () {
         console.log('I am Factory Rect')
         this.printProperties()
      },
      printProperties: function () {
         console.log(this.width)
         console.log(this.height)
      },
   }
}
var rect1 = createRect(40, 20)
rect1.draw()

var rect2 = createRect(60, 30)
rect2.draw()

// Constructor Pattern(recommended)
/* 
Rules of declaring Constructor Pattern:
1. Constructor Name will Capital Letter
2. Property Name starts with {this} keyword
3. colon(:) is replace by equal sign(=)
4. After declaring Property there is no comma(,)
5. we should add {new} keyword to create a new object

Most Developers uses Constructor Pattern
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
console.log(rect3.draw())

var rect4 = new Rectangle(15, 7)
console.log(rect4.draw())
