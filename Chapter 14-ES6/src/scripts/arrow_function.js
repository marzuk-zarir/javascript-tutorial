// !arrow function works in only anonymous(function expression) function
// ?es5 anonymous function syntax
let add = function (a, b) {
    return a + b
}
console.log(add(2, 5)) // 7


// ?es6 arrow(anonymous) function syntax
let add2 = (a, b) => {
    return a + b
}
console.log(add2(2, 5)) // 7

// when we pass one argument we can/can't use use first_braces
let sqr = x => {
    return x * x
}
console.log(sqr(3)) // 9

// when we return one line code we can/can't use curly_braces
let sqr2 = x => x * x
console.log(sqr2(3))  // 9

let add3 = (a, b) => a + b
console.log(add3(5, 2)) // 7

/* ================= Arrow with {this} keyword =================== */
// normal anonymous function
let obj = {
    name: 'marzuk',
    print: function () {
        return this
    }
}
console.log(obj.print())    // refer {obj} object

// !use in non-strict mode otherwise undefined(webpack)
let obj2 = {
    name: 'marzuk',
    print: () => this
}
console.log(obj2.print())   // refer {window} object bcz arrow function return his parent's this context

let obj3 = {
    fname: 'Marzuk',
    print: function () {
        setTimeout(function () {
            console.log(this)   // refer window
            console.log(`hello, ${this.fname}`)  // hello, undefined
        }, 1000)
    }
}
obj3.print()
/**
 * obj3.print's execution context:
 * ?print -> this
 * ?output: obj3
 * 
 * ?print -> setTimeOut -> this
 * ?output: window
 */

// *but arrow function can work properly in this situation
let obj4 = {
    fname: 'Marzuk',
    print: function () {
        setTimeout(() => {
            console.log(this)   // refer ob4
            console.log(`Hello, ${this.fname}`) // Hello, Marzuk
        }, 1000)
    }
}
obj4.print()
/**
 * ?it works bcz arrow function always refer his parent's {this} context...in this situation arrow func refer obj4 object
 * note: call, apply, bind can't work with arrow function
 */