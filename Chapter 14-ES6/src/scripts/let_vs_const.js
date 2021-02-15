// *var vs let vs const
// var
if (true) {
    var a = 20
}
console.log(a) // 20
for (var i = 0; i < 10; i++) {}
console.log(i) // 10


// let & const
// ?let & const(curly brace can create a block for use of let & const use)
/* if (true) {
    let b = 30
}
console.log(b)  // reference error
for (let j = 0; j < 10; j++) {}
console.log(j)  // reference error */

// ?we can't re-write in const declaration 
// const c = 50
// c = 60
// console.log(c)  // "c" is read-only 

// ?we can re-write in let declaration
let d = 70
d = 80
console.log(d)  // 80


