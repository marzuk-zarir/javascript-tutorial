var a = 100
newPrint(a)

print(10)

var newPrint = print
newPrint(45)

function print(a) {
    console.log(a)
}
print(a)

/* 
Creation Phase:
--------------
var a = undefined
var newPrint = undefined
func print = reference no.

Execution Phase:
---------------
a = 100
type error
print to console 10
print to console 45
print to console 100

Output:
------
TypeError
*/