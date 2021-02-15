/**
 * ! try-catch use for handling an error... at first try block's code execute and run if an error occur in try block's code then execute catch block's code and we can modify error name, error message, error stack, error lineNumber from catch block
 */
function textToWords(text) {
    try {
        let strTrim = text.trim()
        let wordsArray = strTrim.split(' ')
        return wordsArray
    } catch (error) {
        return 'Please provide a valid text'
        // return error
        // return error.name
        // return error.message
        // return error.stack
    }
}
console.log(textToWords('  I am arus babu '))
console.log(textToWords(99))