// ! in sayHi() we declare result and value assign in setTimeOut()...setTimeOut() is a async function so, js skip and execute next line and print undefined
function sayHi(name) {
    let result
    setTimeout(() => {
        result = name
    }, 3000)
    return result
}
const asyncOutput = sayHi('Marzuk Zarir')
console.log(asyncOutput)

// ? the solution is all operation should declare in setTimeOut though it isn't work perfectly (not recommended)
function sayHi2(name) {
    setTimeout(() => {
        console.log(name)
    }, 3000)
}
const asyncOutput2 = sayHi2('Marzuk Zarir')
console.log(asyncOutput2)