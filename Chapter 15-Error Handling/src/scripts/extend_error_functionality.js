/**
 * ! we can extend Error constructor's functionality and create many function with specific functionality....
 */
class CustomError extends Error {
    constructor(msg) {
        super(msg)
    }
}
try {
    console.log('line 1')
    throw new CustomError('extend error functionality')
    console.log('line 2')
    console.log('line 3')
} catch (e) {
    console.log(e)
}