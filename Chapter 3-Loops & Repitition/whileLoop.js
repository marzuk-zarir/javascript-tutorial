// while loop
// var i = 1
// while (i <= 10){
//    console.log(i + ' Marzuk')
//    i++
// }
while (true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('Wow!Winner')
        break
    } else {
        console.log('You got ' + rand)
    }
}
