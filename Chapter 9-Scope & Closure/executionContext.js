// Execution Context in JavaScript
/* 
1. Creation Phase
2. Execution Phase
*/
function a() {
   b()
   console.log('I am function a')
}

function b() {
   d()
   console.log('I am function b')
}

function c() {
   console.log('I am function c')
}

function d() {
   c()
   console.log('I am function d')
}

var x = 100
a()
console.log('I am Global')

/* 
Stack Data Structure(first-in last-out):
----------------------------------------
Function c Execution Context
Function d Execution Context
Function b Execution Context
Function a Execution Context
Global Execution Context

Output:
-------
I am function c
I am function d
I am function b
I am function a
I am Global
*/

// Creation Phase
/* creation phase understand only declaration not value definition */
var y

// Executional Phase
/* In this phase code will be execute and run */
y = 100
console.log(y)