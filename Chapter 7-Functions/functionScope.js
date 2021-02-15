// global scope
var a = 50 // var a is a global scope & it is accessible from every where even inside the function
console.log(a)

// local scope
function parentX() {
    var b = 60 // var b is a local scope for this function and it's child function...but we can't access {b} outer of this function
    function childX() {
        var c = 70 // var c is a local scope for this function and it's child function...but we can't access {c} outer of this function
        function childZ() {}
    }
}

// uses of local scope
function test(n) {
    function a() {
        return n % 3 === 0
    }
    function b() {
        return n % 5 === 0
    }
    if (a() && b()) {
       console.log(n + ' is devisable both 3 and 5')
    } else {
       console.log('Not a valid number');
    }
}
test(15)