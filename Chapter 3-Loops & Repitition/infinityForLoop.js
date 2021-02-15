for (; ;) {
    var n = Math.floor(Math.random() * 10 + 1)
    if (n == 9) {
        console.log("You're Winner")
        break
    } else {
        console.log(n)
    }
}
