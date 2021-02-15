// what is string??
// 'string' "string" `string`

// ********* string literal vs constructor ***********
str = 'something'
n = 10
str2 = String(n)
str3 = n.toString()
str4 = n + ''
console.log(str)  // string literal
console.log(str2) // string constructor
console.log(str3) // string method
console.log(str4) // string concat

/*********** Escape Notation **************/
var str5 = "You're great" //escape '
console.log(str5)
console.log('this is text.\nthis is another text.')   // new line fead return(\n)
console.log('this is \t\ttext')    // horizontal tab return(\t)
console.log('this \\is text')    // for print \
console.log('lor\r em')  // carriage return(\r)

/******** string comparison *****************/
var str6 = 'abc'
var str7 = 'bcd'
console.log(str6 === str7) //false
console.log(str6 < str7)   //true
console.log(str6 > str7)   //false
console.log('001' == 1) //true

/********** string method **************/
// concat method
var a = 'I am '
var b = 'Marzuk'
var c = a.concat(b)
console.log(c)

// substring method        // char starts from 0
console.log(c.substr(5)) // Marzuk
console.log(c.substr(5, 3)) // Mar

// character find out  // which char store in index no. in this variable
console.log(c.charAt(2)) // a

// starts with & ends with (case-sensitive)
console.log(c.startsWith('I am')) // true
console.log(c.endsWith('Marzuk')) // true

// all character will capital letter
console.log(a.toUpperCase())     // I AM
// all character will small letter
console.log(a.toLowerCase())     // i am

// trim method
console.log('   sjdsjdfksd    '.trim())

// split method {split('word_separator')}
console.log(c.split(' ')) // returns a array which stores words as array elements

/********* string length *************/
var str8 = 'marzuk zarir'
var length = 0
while (true) {
    if (str8.charAt(length) == '') {
        break
    } else {
        length++
    }
}
console.log(length)
console.log(str8.length)   // build in method
