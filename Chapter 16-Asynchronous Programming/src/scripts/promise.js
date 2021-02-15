/**
 *! Promise is js constructor which can used for make a promise object....promise constructor contains a callback function and this function bring two arguments 1.resolve, 2.rejected
 ** normally promise is pending when task is completed it calls resolve() and when is error for resolving it calls reject()
 *? then(callback_func) block bring resolve function as argument
 *? catch(callback_func) block bring reject function as argument
 */

let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'one')
})
p1
    .then((v) => {
        console.log(v)
    }).catch((e) => {
        console.log(e)
    })

// ? create a function for got a Iphone... if I fail in exam I can't get Iphone otherwise I get a new Iphone
function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('I got new Iphone 12 pro')
            } else {
                reject(new Error('I have failed in exam'))
            }
        }, 2000)
    })
}
getIphone(true) // true for pass false for fail
    .then((v) => {  // if pass it will be execute
        console.log(v)
    })
    .catch((e) => {   // if fail it will be execute
        console.log(e)
    })