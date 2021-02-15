// ! we can use finally block after try{}catch(e){} block and it is optional....
// *if an error occur in try block then execute catch block and at last execute finally{} block like this executional context [ try{} -> catch(e){} -> finally{} ] 
// ?and if doesn't error occur in try block the executional context is  [ try{} -> finally{} ]

// ? with error
try {
    console.log('line number 1')
    throw new Error('custom error')
    console.log('line number 2')
    console.log('line number 3')
} catch (e) {
    console.error(e)
} finally {
    console.log('I am finally block without occur an error')
}

// ? without error
try {
    console.log('line 1')
    console.log('line 2')
    console.log('line 3')
} catch (e) {
    console.log(e)
} finally {
    console.log('I am finally block without occur an error')
}