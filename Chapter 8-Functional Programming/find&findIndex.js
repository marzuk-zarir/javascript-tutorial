var arr = [3, 5, 3, 88, 9, 4, 2, 8, 6, 1, 7]

// find method
var result = arr.find(function (value) {
   return value === 9
})
console.log(result)  // 9

// findIndex method {if there is same value in multiple index then it returns first one}
var result2 = arr.findIndex(function (value) {
   return value === 9 // if value is 9 then return 9's index number
})
console.log(result2)  // 4

// custom find & findIndex function same as find & findIndex method
function find(arr, cb) {
   for (var i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
         return arr[i]
      }
   }
}
function findIndex(arr, cb) {
   for (var i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
         return i
      }
   }
}
var result3 = find(arr, function (value) {
   return value === 9
})
console.log(result3) // 9

var result4 = findIndex(arr, function (value) {
   return value === 9
})
console.log(result4) // 4
