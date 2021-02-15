// !es6 string's new features

//  multiline string
// ?es5
/* 
var strEs5 = 'Et sea 
   sanctus ipsum dolores ea
. Rebum et    accusam lorem duo, dolo
re ipsum   voluptua ipsu
m'
console.log(strEs5) // error 
*/
// ?es6
var strEs6 = `Et sea 
   sanctus ipsum dolores ea
. Rebum et    accusam lorem duo, dolo
re ipsum   voluptua ipsu
m`
console.log(strEs6)


//  ******** string with variables ********
var fName = `Marzuk`
var age = 15
// ?es5
console.log('My name is ' + fName + ' and I am ' + age + ' years old.')
// ?es6
console.log(`My name is ${fName} and I am ${age} years old.`)
// we can also apply one_line_logic in es6's string feature
console.log(
    `My name is ${fName} and I am ${age} years old. I am ${
        age < 18 ? 'not ' : ''
    }adult`
)

// ********** ES6 New String Method ***********
// padStart/padEnd('which_character_numbers_we want', 'fill_character_with: optional')
console.log(fName.padStart(10, '$')) // $$$$Marzuk
console.log(fName.padEnd(10, '*')) // Marzuk****
