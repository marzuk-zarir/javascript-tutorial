var arr = [48, 22, 27, 11, 94, 13]

// Built In array traverse Method
arr.forEach(function (value, index, arr) {
   console.log(value, index, arr)
})
/* 48 0 [ 48, 22, 27, 11, 94, 13 ]
22 1 [ 48, 22, 27, 11, 94, 13 ]
27 2 [ 48, 22, 27, 11, 94, 13 ]
11 3 [ 48, 22, 27, 11, 94, 13 ]
94 4 [ 48, 22, 27, 11, 94, 13 ]
13 5 [ 48, 22, 27, 11, 94, 13 ] */

var sum = 0
arr.forEach(function (a, b, c) {
   sum += a
})
console.log(sum)  // 215



// Custom array traverse Function{same as forEach method}
function forArray(array, cb) {
   for (var i = 0; i < array.length; i++) {
      cb(array[i], i, array)
   }
}
var sum2 = 0
forArray(arr, function (val, ind, arr) {
   sum2 += val
})
console.log(sum2) // 215

// arr + 5
forArray(arr, function (val, ind, arr) {
   arr[ind] = val + 5
})
console.log(arr)  // [ 53, 27, 32, 16, 99, 18 ]
