// ! we can occur an custom error with Error(msg:optional) constructor

try {
    console.log('line 1')
    throw new Error('we are success to throw an error')
    console.log('line 3')
    console.log('line 4')
} catch (e) {
    console.log(e)    
}