//! if we can return a promise from a function with Promise constructor...this should be like this
function myPromise() {
    return Promise.resolve('with promise constructor')
}
myPromise().then(v => console.log(v))

//* return a promise is vary easy with async function...for make a async function we should add {async} keyword for return a promise from function
async function myAsync() {
    return 'with async keyword'
}
myAsync().then(v => console.log(v))


//* we can use {await} keyword in async function {await} keyword for waiting for promise resolving when promise resolving is done then execute next line..... so, we can use await without .then().catch() block
let p1 = new Promise(resolve => setTimeout(resolve, 3000, 'test value'))
async function myAsync2(){
    let v = await p1
    console.log(v)
}
myAsync2()

// ? we can use await with fetch api await is used for promise resolving
async function fetchWithAwait() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    let mapNameArray = await data.map(u => u.name)  // every userName in a new array
    console.log(mapNameArray)
}
fetchWithAwait()

// ? we can also use try{}.catch(e){} block for custom error
async function fetchWithAwait2() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        let mapNameArray = await data.map(u => u.name)
        console.log(mapNameArray)
    } catch (e) {
        console.error(e.message)
    }
}
fetchWithAwait2()


// ? for promise array's all promises resolving at a time
let promiseArray = [Promise.resolve('one'), Promise.resolve('two'), Promise.resolve('three')]
async function promiseAll() {
    let allResolvePromises = await Promise.all(promiseArray)
    console.log(allResolvePromises)
}
promiseAll()