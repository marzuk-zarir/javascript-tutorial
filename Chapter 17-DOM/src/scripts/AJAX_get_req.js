/**
 * ! AJAX get request means get some data from remote server and works with this data...
 * * we can ajax get request send with fetch api or XMLHTTPRequest constructor..
 * ? fetch api returns a promise and we can handle it...second promise return data array... then we can traverse this array elements and take array's element's title..then we append lists items in UL tags
 * * we can create li elements with liGenerator func
 */
const load = document.getElementById('load')
const postList = document.getElementById('post-list')
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

load.addEventListener('click', function () {
    fetch(BASE_URL)
        .then(res => res.json())
        .then(post => {
            post.forEach((post, ind) => {
                let li = liGenerator(post, ind + 1)
                postList.appendChild(li)
            })
        })
        .catch(e => console.log(e.message))
})

function liGenerator(item, num) {
    let li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerHTML = `(${num}) ${item.title}`
    return li
}