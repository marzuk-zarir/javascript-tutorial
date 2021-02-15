/**
 * ! XMLHttpRequest is a class...this object has many method like open('http method', 'http URL'), send(), setRequestHeader(), onerror(), abort()
 * ? http status: 
 ** 200 --> okay
 ** 404 --> page not found
 ** 403 --> forbidden
 ** More: https://www.w3schools.com/tags/ref_httpmessages.asp
 *******************************************************************
 * ?readyState:
 ** 0 --> request not initialized
 ** 1 --> server connection established
 ** 2 --> request received
 ** 3 --> processing request
 ** 4 --> request finished and response is ready
 */

const xhr = new XMLHttpRequest()
xhr.open('get', 'https://jsonplaceholder.typicode.com/users')
xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.response) // json to object
            console.log(response)
        } else {
            console.log(xhr.status)
        }
    }
}
xhr.send()




// create a function for ajax request
function ajaxGetRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response)
                callback(null, response)
            } else {
                callback(xhr.status, null)
            }
        }
    }
    xhr.send()
}
// users
ajaxGetRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
    if (err) {
        console.log(err)    
    } else {
        res.forEach((r) => console.log(r.name))   // print all name of users
    }
})
// posts
ajaxGetRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if (err) {
        console.log(err)    
    } else {
        console.log(res)
    }
})