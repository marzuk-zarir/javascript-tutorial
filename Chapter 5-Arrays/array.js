/******* what is array ***********/
// array is data structure where we can organize multiple data under a single variable

/************ array declare **************/
// literal way
var arr = [1, 2, 3, 4, 5]
console.log(arr)
// we can access array element by calling index number
console.log(arr[0]) // 1
console.log(arr[3]) // 4
// we can add items in array after array declaration
arr[5] = 15
arr[10] = 17
console.log(arr)
console.log(arr[7])
// arr.lenght returns number of items in array.....it is count form 01
console.log(arr.length)
// we can updates data after array declaration
arr[2] = 77
console.log(arr)
// construct way
var arr2 = Array(1, 2, 3)
console.log(arr2)
