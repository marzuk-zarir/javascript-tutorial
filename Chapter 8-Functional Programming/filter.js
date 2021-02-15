// !filter method filter a array. this method returns true condition as a new array element

var arr = [5, 7, 9, 2, 4, 1, 6, 2, 7, 3, 8]
var filteredArray = arr.filter(function(value) { 
   return value % 2 === 0  // find even
})
console.log(filteredArray)    // [ 2, 4, 6, 2, 8 ]



// custom filter function like as filter method
function filter(arr, cb) {
   var newArr = []
   for (var i = 0; i < arr.length; i++) {
      if (cb(arr[i], i, arr)) {
         newArr.push(arr[i])
      }
   }
   return newArr
}
// filter even number
console.log(   // [ 2, 4, 6, 2, 8 ]
   filter(arr, function (value) {
      return value % 2 === 0
   })
)
// filter odd number
console.log(   // [ 5, 7, 9, 1, 7, 3 ]
   filter(arr, function (value) {
      return !(value % 2 === 0)
   })
)
// filter greater than 5 number
console.log(   // [ 7, 9, 6, 7, 8 ]
   filter(arr, function (value) {
      return value > 5
   })
)
