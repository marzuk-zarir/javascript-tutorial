// ! we can declare a property in class like...
class Rectangle2 {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.name = 'Marzuk Zarir'   // ?property
    }
}
let rect2 = new Rectangle2(20, 10)
console.log(rect2)
// ! another way but... must use @babel/plugin-proposal-class-properties plugin(not recommended)
class Rectangle3 {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    name = 'Marzuk Zarir'   // ?property.. used in react-js
}
let rect3 = new Rectangle3(20, 10)
console.log(rect3)



// ! we can also declare a function in object's property....default function set in object's prototype
class Rectangle4 {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.draw = function () {
            console.log('it set in Rectangle3 object\'s property')
        }
    }
}
let rect4 = new Rectangle4(20, 10)
console.log(rect4)