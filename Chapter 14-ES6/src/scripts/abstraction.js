// ! we can hide some property of custom class from users with Symbol....but it is not proper way... hide property starts with {_} underscore this is a naming convention
const _radius = Symbol() 
const _draw = Symbol() 
class Circle {
    constructor(radius) {
        this[_radius] = radius  // ? private properties
    }
    [_draw]() {    // ? private method
        console.log('Drawing...')
    }
}
let c1 = new Circle(4)
console.log(c1) // Circle {Symbol(): 4}
// abstraction(hide some features from users)
// c1._draw()  // error

// ! we can hide property with Weakmap(Recommended)
const _radius2 = new WeakMap()
const _name = new WeakMap()
const _draw2 = new WeakMap()
class Circle2 {
    constructor(radius2, name) {
        _radius2.set(this, radius2) // ? private properties
        _name.set(this, name)   // ? private properties
        _draw2.set(this, () => {    // ? private method
            console.log('drawing...')
        })
    }
    print() {
        return `Name is ${_name.get(this)} & Radius is ${_radius2.get(this)}`
    }
}
let c2 = new Circle2(5, 'Marzuk')
console.log(c2) // Circle2 {}
console.log(c2.print()) // Name is Marzuk & Radius is 5

// ===================== getter-setter ======================
// ! access into private property & method
const _radius3 = new WeakMap()
const _name2 = new WeakMap()
class Circle3 {
    constructor(radius3, name2) {
        _radius3.set(this, radius3)
        _name2.set(this, name2)
    }
    // getter
    get radius() {
        return _radius3.get(this)
    }
    // setter
    set radius(s) {
        _radius3.set(this, s)
    }
    print() {
        return `Name is ${_name2.get(this)} & Radius is ${_radius3.get(this)}`
    }
}
let c3 = new Circle3(6, 'Zarir')
console.log(c3.print()) // Name is Zarir & Radius is 6
console.log(c3.radius)  // 6
c3.radius = 100
console.log(c3.radius)  // 100