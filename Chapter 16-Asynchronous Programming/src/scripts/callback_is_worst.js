/**
 * ! callback hierarchy is much more complicated....so, maintenance is difficult and we can't understand properly.....thats why async task handling with callback is worst way....... 
 */
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

// users/userId --> posts/id --> title
const baseUrl = 'https://jsonplaceholder.typicode.com'
let userId = 10
ajaxGetRequest(`${baseUrl}/users/${userId}`, (err, res) => {
    if (err) {
        throw new Error('error ocurred')
    } else {
        let {id} = res
        ajaxGetRequest(`${baseUrl}/posts/${id}`, (err, res) => {
            if (err) {
                throw new Error('error ocurred')
            } else {
                let {title} = res
                console.log(title)
            }
        })
    }
})