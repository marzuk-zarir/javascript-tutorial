// search data
var arr = [6, 8, 28, 1, 44, 4, 99, 63, 89, 5, 3]
var find = 10
var isFound = true
for (i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log('Data Found in element ' + (i + 1))
        isFound = false
        break
    }
}
if (isFound) {
    console.log('Data not Found')
}
