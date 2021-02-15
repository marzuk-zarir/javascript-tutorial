// VALUE OF E
console.log('Value of E = ' + Math.E);
// VALUE OF PI
console.log('Value of PI = ' + Math.PI);


var n = 4.378
var n1 = 4.68

// Math.abs(x) returns the absolute (positive) value of x:
console.log('aboslute value = ' + Math.abs(n));

// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log('floor value = ' + Math.floor(n));

// Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log('ceil value = ' + Math.ceil(n));

// round returns the value of rounded to its nearest integer
console.log('round value = ' + Math.round(n));  // 4
console.log('round value = ' + Math.round(n1)); // 5


// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(200, 300, 400, 500));   //200
console.log(Math.max(200, 300, 400, 500));   //500

// Math.pow(x, y) returns the value of x to the power of y
console.log(Math.pow(3, 3));  //27
// Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64));  //8

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());   // (0-1)
console.log(Math.round(Math.random() * 50));  // randomly generate a number between 1 & 50 
