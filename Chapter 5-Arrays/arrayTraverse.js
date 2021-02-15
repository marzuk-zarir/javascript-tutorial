// array traversing means operation by touch all array element with loop

var arr = [5, 7, 2, 9, 22, 24]
// arr[0]
// arr[4]
// arr[arr.length - 1]  //last array index number
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    arr[i] += 2
}
console.log(arr)

// summation of all array element
var sum = 0
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)

// odd and even element identify with for loop
for(var i = 0; i < arr.length; i++){
   if (arr[i] % 2 === 0) {
      console.log('even element : ' + arr[i])
   } else {
      console.log('odd element : ' + arr[i])
   }
}