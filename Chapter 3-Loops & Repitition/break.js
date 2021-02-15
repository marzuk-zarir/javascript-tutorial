while (true) {
    var n = Math.floor(Math.random() * 10 + 1)
    if (n == 9) {
        console.log("You're Winner")
        break
    } else {
        console.log(n)
    }
}
console.log('')
for (var i = 1; i <= 10; i++) {
    if (i % 5 == 0) {
        break
    } else {
        console.log(i)
    }
}
