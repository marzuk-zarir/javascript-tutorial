// object literal declaration
var rect = {
   width: 100,
   height: 50,

   draw: function () {
      console.log('I am Rectangle')
   }
}
rect.draw()

// if we want to access same objects properties in same object we should use {this} keyword
var rect = {
    width: 100,
    height: 50,
 
    draw: function () {
       console.log('rect width is ' + this.width)
       console.log('rect height is ' + this.height)
    }
 }
 rect.draw()

//  {this} is valid without object in javascript....in returns Global Object in NODE.JS & Window Object in Browser

function myFunc() {
   console.log(this)
}
myFunc() // In browser it shows Window Object
new myFunc() // it returns empty object

// we can call a method from same object
var sqr = {
   width: 47,
   height: 22,

   draw: function () {
      console.log('I am Sqr')
      this.printProperties()
   },
   printProperties: function () {
      console.log(this.width)
      console.log(this.height)
   },
}
sqr.draw()
