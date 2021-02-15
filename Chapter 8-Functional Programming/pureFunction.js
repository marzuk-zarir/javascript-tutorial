// !pure function

// *It returns the same result if given the same arguments
// *It doesn't cause observable side effects

// Pure Function
function srt(n) {
    return n * n
}
console.log(srt(2))
console.log(srt(2))
console.log(srt(2))

// not a pure function bcz It cause observable side effects
var n = 50
function change() {
    n = 60
    return n
}
console.log(change()) // 60
console.log(n)  // 60


// not a pure function bcz It cause observable side effects
var obj = {
    x: 45,
    y: 30,
}
function chgObj(obj) {
    obj.x = 100
    obj.y = 200
    console.log(obj)
}
chgObj(obj)     // { x: 100, y: 200 }
console.log(obj)    // { x: 100, y: 200 }
