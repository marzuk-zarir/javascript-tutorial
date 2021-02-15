//==========return statement==========//
console.log(
    'return statement returns a value from a function.return statement used in most of the function'
)
function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
var result = addAll(2, 3, 5)
console.log(result)

function person(name, email) {
   return {
      Name: name,
      Email: email
   }
}
var p1=person('Marzuk', 'marzukzarir@gmail.com')
console.log(p1)