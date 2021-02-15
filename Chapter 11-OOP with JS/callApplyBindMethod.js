// if we declare {this} keyword in pure/general function..it will refer window object..but we need to make a empty object and declare a function in that object without declaring a method(function)..in this situation we can use call(), apply(), bind() method

function myFunc(c, d) {
   console.log(this) // window object
   console.log(this.a + this.b + c + d) // NaN
}

myFunc()

// call(custom_object, arguments...)
myFunc.call({ a: 40, b: 20 }, 10, 5)

// apply(custom_object, [arguments in array...])
myFunc.apply({ a: 40, b: 20 }, [10, 5])

/* 
deference between call() and apply():
1. after declaring object... we can set function's arguments to side by side in call()
2. after declaring object... we can set function's arguments in array in apply()
*/

// bind()
var myBind = myFunc.bind({a: 40, b: 20}, 10, 5)
myBind()

var myBind2 = myFunc.bind({a: 40, b: 20})
myBind2(10, 5)

/* 
bind() can bind a function in custom_object but it doesn't call function instantly where call() and apply() call function instantly
*/
