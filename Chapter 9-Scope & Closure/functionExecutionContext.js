abc()

function abc() {
   console.log('I am Function')
}
abc()

newFunction()
var newFunction = function () {
   console.log('I am anonymous function');
}

newFunction()

/* 
Creation Phase:
---------------
abc() = store a unique reference number
var newFunction = undefined

Execution Phase:
----------------
call abc()
call abc()
type error
call newFunction()

Output:
------
TypeError

// that's why we can call function before/after function declaration..........but anonymous function only use after function declaration other wise compiler throw a typeError
*/