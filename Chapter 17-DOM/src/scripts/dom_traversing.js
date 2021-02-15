/**
 * ! we can traverse dom elements to find out parent element, child elements etc...
 */
let list = document.getElementById('list')  // ul

// find out parent element
console.log(list.children)  // <div class="container">...</div>

// find out child elements
console.log(list.parentElement)   // HTMLCollection(3)

// find out previous html element
console.log(list.previousElementSibling) // <p class="lead">...</p>

// find out next html element
console.log(list.nextElementSibling) // <div class="sample"></div>

// find first html element under this list
console.log(list.firstElementChild)  // <li class="list-group-item" name="list-item-one">List One</li>

// find last html element under this list
console.log(list.lastElementChild)  // <li class="list-group-item">List Three</li>

/**
 * ! htmlCollection is a array like data structure thats why we can't traverse like array element.....but we can convert it in Array and traverse like array elements
 */
let listItems = document.getElementsByTagName('li')     // htmlCollection

// let listItemsArray = Array.from(listItems)  // easy way Array
// let listItemsArray = Array.prototype.slice.apply(listItems)  // hard way Array
let listItemsArray = [...listItems]  // easy way Array(recommend)

// try array method to traverse elements
listItemsArray.forEach((li, ind) => {
    let prevInnerHtml = li.innerHTML
    li.innerHTML = `(${ind + 1}) ${prevInnerHtml}` 
})
/* 
(1) List One
(2) List Two
(3) List Three
*/