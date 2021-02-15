/**
 *! Fetch api return a new promise
 */
const baseUrl = 'https://jsonplaceholder.typicode.com'
let response = fetch(baseUrl)
console.log(response)   // Promise {<pending>}

//? fetch api returns new promise so we can call .then().catch() block

//? res.json() return a new promise so we can resolve this promise in new then block and it is synchronously resolved....it isn't nested that is the difference between callback and promise

fetch(`${baseUrl}/users`)
    .then(res => res.json())    // return a new promise
    .then(rsl => {
        console.log(rsl)
        return Promise.resolve('something')  // return a new resolve promise
    })
    .then(something => {
        console.log(something)
        return Promise.resolve('another promise')  // return a new resolve promise
    })
    .then(another => {
        console.log(another)
    })
    .catch(err => {
        console.log(err)
    })
// * getAjaxRequest() function create for XMLHttpRequest with promise...it is like fetch api
function getAjaxRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url)
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let res = JSON.parse(xhr.response)
                    resolve(res)
                } else {
                    reject(`Error ${xhr.status}`)
                }
            }
        }
        xhr.send()
    })
}
getAjaxRequest(`${baseUrl}/users`)
    .then(data => {
        for(let i in data) {    // traverse every object and print their name property
            console.log(data[i].name)
        }
    })
    .catch(err => {
        console.log(err)
    })
