// !array.map(value, index, array) method
var arr = [4, 5, 6]

// *it returns a modified array...it can't harm original array
var sqrArr = arr.map(function (value) {
   return value * value
})
console.log(arr) // [ 4, 5, 6 ]
console.log(sqrArr) // [ 16, 25, 36 ]




// custom function like as map method
function arrayMap(arr, cb) {
   var newArray = []
   for (var i = 0; i < arr.length; i++) {
      var temp = cb(arr[i], i, arr)
      newArray.push(temp)
   }
   return newArray
}
var sqr = arrayMap(arr, function (value) {
   return value * value
})
var qb = arrayMap(arr, function (value) {
   return value * value * value
})
var mten = arrayMap(arr, function (value) {
   return value * 10
})
console.log(arr)  // [ 4, 5, 6 ] original array
console.log(sqr)  // [ 16, 25, 36 ] square value
console.log(qb)   // [ 64, 125, 216 ] power 3 value
console.log(mten)  // [ 40, 50, 60 ] into 10 value
