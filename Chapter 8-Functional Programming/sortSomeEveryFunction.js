/* 
?ascending order means lower to upper
?descending order means upper to lower
*/

// sort method (sorting algorithm)
var obj = [
   {
      name: 'A',
      age: 28,
   },
   {
      name: 'B',
      age: 32,
   },
   {
      name: 'C',
      age: 22,
   },
   {
      name: 'D',
      age: 19,
   },
   {
      name: 'E',
      age: 29,
   },
   {
      name: 'F',
      age: 25,
   },
]
// sort with ascending age order
var aSort = obj.sort(function (a, b) {
   if (a.age > b.age) {
      return 1
   } else if (a.age < b.age) {
      return -1
   } else {
      return 0
   }
})
console.log(aSort)
/* 
[
  { name: 'D', age: 19 },
  { name: 'C', age: 22 },
  { name: 'F', age: 25 },
  { name: 'A', age: 28 },
  { name: 'E', age: 29 },
  { name: 'B', age: 32 }
]
*/

// sort with descending age order
var dSort = obj.sort(function (a, b) {
   if (a.age > b.age) {
      return -1
   } else if (a.age < b.age) {
      return 1
   } else {
      return 0
   }
})
console.log(dSort)
/* 
[
  { name: 'B', age: 32 },
  { name: 'E', age: 29 },
  { name: 'A', age: 28 },
  { name: 'F', age: 25 },
  { name: 'C', age: 22 },
  { name: 'D', age: 19 }
]
*/

var arr = [-4, -3, -2, 0, 4, 2, 5, 1, 3, 9, 2, -3, 2, 7, 8, -8, 4, 6, 5, 9]

// sort with ascending order
var aSortArr = arr.sort(function (a, b) {
   if (a > b) {
      return 1
   } else if (a < b) {
      return -1
   } else {
      return 0
   }
})
console.log(aSortArr)
/* 
[
  -8, -4, -3, -3, -2, 0, 1,
   2,  2,  2,  3,  4, 4, 5,
   5,  6,  7,  8,  9, 9
]
*/

// sort with descending order
var dSortArr = arr.sort(function (a, b) {
   if (a > b) {
      return -1
   } else if (a < b) {
      return 1
   } else {
      return 0
   }
})
console.log(dSortArr)
/* 
[
  9,  9,  8,  7,  6,  5, 5,
  4,  4,  3,  2,  2,  2, 1,
  0, -2, -3, -3, -4, -8
]
*/
/* 
descending order is same as ascending order only change is {1} & {-1}
*/

// !Every Method{if every element maintains our logic it returns true otherwise false}
var arr2 = [4, 2, 5, 1, 3, 9, 2, 2, 7, 8, 4, 6, 5, 9]

// *check every numbers are even?? if even it returns true and otherwise false
var result = arr2.every(function (value) {
   return value % 2 === 0
})
console.log(result) // false

var result2 = arr2.every(function (value) {
   return value % 2 === 1 || value % 2 === 0
})
console.log(result2) // true

// check every numbers are positive in array??
var checkNeg = arr2.every(function (value) {
   return value >= 0
})
console.log(checkNeg) // true

// Some Method{if one or more than one numbers are maintains our logic it returns true otherwise false}
arr3 = [4, 2, 5, 1, 3, -9, 2, 2, 7, 8, 4, -6, 5, 9]

// is there any negative number?
var result3 = arr3.some(function (value) {
   return value < 0
})
console.log(result3) // true

// is there any even number?
var result4 = arr3.some(function (value) {
   return value % 2 === 0
})
console.log(result4)    // true
