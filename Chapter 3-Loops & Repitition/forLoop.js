// For Loop

// for (i = 0; i < 10; i++) {
//     console.log((i + 1) + ' Marzuk Zarir')
// }

// for (initializer, conditions, increment or decrement) {
//     statement
// }
console.log('Even Number between 1 to 10: ')
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
console.log('\n')
var sum = 0
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i))
        sum += i
    }
}
console.log('summation of even numbers between 1 to 10 is = ' + sum)
console.log('\n')

console.log('odd numbers summation between 1  and 10 is: ')
sum2 = 0
for (i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log(i + '+' + sum2 + ' = ' + (sum2 + i))
        sum2 += i
    }
}
