/**
 * ! Window Object is a js object which contains everything of a js file in browser...it is a global context
 * ? in browser every tabs create a Window object instance in javascript engine and it is different from other tab's window object...so, one window object can not harm other window object 
 */

 console.log(window)
 console.log(typeof window) // object

// * when we declare variables, functions, object, class they are automatically attach with Window Object....
// var a = 10 and window.a = 10 are same
console.log(setTimeout === window.setTimeout)  // true

// * in document is a window object's property...in document object HTML documents are include
console.log(document)