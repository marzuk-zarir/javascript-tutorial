/**
 * ! we can use if-else for handling custom error (Not Recommended) 
 */
function changeIt(value) {
    const intValue = parseInt(value)
    if (!intValue) {
        return 'Please provide a valid string or number'
    }
    return intValue
    // another way
    // let msg
    // (!intValue) ? (msg = 'Please provide a valid string or number') : (msg = intValue)
    // return msg
}
console.log(changeIt('78.99'))
console.log(changeIt('hhhshhs0'))
console.log(changeIt([]))
console.log(changeIt({}))