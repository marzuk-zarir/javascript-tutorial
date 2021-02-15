/**
 * !this function is created by some ES6 features
 * ?Object.assign() is a es6's method
 * @param2 reset operator
 */
function mixin(target, ...source) {
    Object.assign(target.prototype, ...source)
}

// simple object literal
var canEat = {
    eat: function () {
        console.log('Eating...')
    },
}
var canWalk = {
    walk: function () {
        console.log('Walking...')
    },
}
var canSwim = {
    swim: function () {
        console.log('Swimming...')
    },
}

// Person Object
function Person(name) {
    this.name = name
}
mixin(Person, canEat, canWalk)
var ps1 = new Person('Marzuk')
console.log(ps1)

// fish object
function Fish(name) {
    this.name = name
}
mixin(Fish, canEat, canSwim)
var goldFish = new Fish('gold fish')
console.log(goldFish)
