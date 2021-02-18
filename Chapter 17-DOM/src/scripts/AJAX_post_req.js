/**
 * ! AJAX Post request means bring data from remote server
 * * we can ajax get request send with fetch api or XMLHTTPRequest constructor...
 * ? fetch(Url, {method, header;{}, body})
 */
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const postFrom = document.getElementById('post-form')
const posts = document.getElementById('posts')

postFrom.addEventListener('submit', function (e) {
    e.preventDefault()
    const title = this.title2.value
    const body = this.body.value
    if (title && body) {
        let postObj = {
            userId: 110,
            title,
            body
        }
        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
        .then(res => res.json())
        .then(data => {
            let item = liGenerator(data)
            posts.appendChild(item)
            this.reset()
        })
        .catch(er => console.log(er.message))
    } else {
        console.log('error')
    }
})

function liGenerator(item) {
    let li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerHTML = `${item.id}. ${item.title} By User ${item.userId}`
    return li
}