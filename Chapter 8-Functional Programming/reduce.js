var arr = [2, 6, 8, 9, 3]

// reduce(prev_value, cur_value, index, array) method.
// summation of array value
var sum = arr.reduce(function (prev, cur) {
   return (prev += cur)
})
console.log(sum)

// max value of array
var max = arr.reduce(function (prev, cur) {
   return Math.max(prev, cur)
})
console.log(max)

// custom function like as reduce method
function reduce(arr, cb, ini) {
   for (var i = 0; i < arr.length; i++) {
      ini = cb(ini, arr[i], i, arr)
   }
   return ini
}  
var sum2 = reduce(
   arr,
   function (prev, cur) {
      return prev + cur
   },
   0
)
console.log(sum2)

