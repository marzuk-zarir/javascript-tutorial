// 'use strict'
function Shape() {
    this.draw = function () {
        console.log(this)
    }
}
let s1 = new Shape()
s1.draw()   // refer Shape Object

// ! when we store a method in variable then it is refer window object regularly but 'use strict' it shows undefined and always 'use strict' mode should declare in first line of script another way we can use @babel-strict-mode-plugin
let anotherDraw = s1.draw
anotherDraw()   // refer Window object but 'use strict' mode it refer undefined


// ? same as class
class ShapeClass{
    constructor() {
        this.draw = function () {
            console.log(this)
        }
    }
}
let shapeClass = new ShapeClass()
let another2 = shapeClass.draw
another2()  // refer Window object but 'use strict' mode it refer undefined