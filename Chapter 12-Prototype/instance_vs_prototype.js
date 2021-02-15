// instance( no inheritance )
function Square(width) {
   this.width = width

   this.draw = function () {
      console.log('My Width is ' + this.width)
   }
}
var sq1 = new Square(10)
var sq2 = new Square(25)
sq1.draw()
sq2.draw()

// Prototype ( inheritance{one reference stored} )
function Square2(width) {
   this.width = width
}

Square2.prototype = {
   draw: function () {
      console.log('My Width is ' + this.width)
   }
}

var sqr = new Square2(30)
var sqr2 = new Square2(50)
sqr.draw()
sqr2.draw()

// Method Overwrite with prototype
function MethodOverwrite(str) {
   this.str = str
}
MethodOverwrite.prototype = {
   toString: function () {
      return 'this method is overwrite'
   }
}

var method = new MethodOverwrite('something')
console.log(method.toString())

/* ============== instance member & prototype member ============== */
/* 
function ConstructorName() {
    instance_body.....
}
ConstructorName.prototype {
    prototype_body...
}
*/
// we can access prototype_members in instance_body & instance_members in prototype body

// instance_members in prototype body
function Rectangle(width) {
   this.width = width
}
Rectangle.prototype = {
   draw: function () {
      return "Rectangle's Width is " + this.width
   }
}

var rect1 = new Rectangle(20)
console.log(rect1.draw())




// prototype_members in instance_body
function Rectangle2() {
   this.draw = function () {
      return this.getWidth()
   }
}
Rectangle2.prototype = {
   getWidth: function () {
      return 'hello Rectangle'
   }
}

var rect2 = new Rectangle2(30)
console.log(rect2.draw())


/* ========= hasOwnProperty method ======== */
function Square3(width) {
   this.width = width
}
Square3.prototype = {
   draw: function () {
      console.log('My Width is ' + this.width)
   }
}
var sqr4 = new Square3(90)
console.log(sqr4.hasOwnProperty('width')) // true
console.log(sqr4.hasOwnProperty('draw')) // false bcz this property defined in his parent object...so draw property isn't his own property

// another solution to print his own property
console.log(Object.keys(sqr4))   // ["width"]