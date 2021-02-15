// Nested Loop
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
var n = 10
for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= i; j++) {
        result += j + ' '
    }
    console.log(result)
}
console.log('')

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

var r = 5
for (var i = 1; i <= r; i++) {
    var result = ''
    for (var j = 1; j <= r; j++) {
        result += '* '
    }
    console.log(result)
}
