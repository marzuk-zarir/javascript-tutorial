// !insert element
var arr =[1, 2, 3, 4, 5, 6, 7, 8]
arr.push(9) // .push insert data in last index
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

var arr2 =[1, 2, 3, 4, 5, 6, 7, 8]
arr2.unshift(8) // .unshift insert data in first index
console.log(arr2) // [8, 1, 2, 3, 4, 5, 6, 7, 8]

var arr3 =[1, 2, 3, 4, 5, 6, 7, 8]
arr3.splice(3, 0, 9, 10) // .splice(starting_index_number, remove_item_number, data...)
console.log(arr3) // [1, 2, 3, 9, 10, 4, 5, 6, 7, 8]

// !remove element
var arr4 = [1, 2, 3, 4, 5, 6, 7, 8]
arr4.pop()   // .pop removes last element of array
console.log(arr4) // [1, 2, 3, 4, 5, 6, 7]

var arr5 = [1, 2, 3, 4, 5, 6, 7, 8]
arr5.shift()   // .shift removes first element of array
console.log(arr5) // [2, 3, 4, 5, 6, 7, 8]

var arr6 = [1, 2, 3, 4, 5, 6, 7, 8]
arr6.splice(3, 1) // .splice(starting_index_number, remove item number)
console.log(arr6) // [1, 2, 3, 5, 6, 7, 8]

// !replace element
var arr7 = [1, 2, 3, 4, 5, 6, 7, 8]
arr7.splice(3, 1, 44)
console.log(arr7) // [1, 2, 3, 44, 5, 6, 7, 8]