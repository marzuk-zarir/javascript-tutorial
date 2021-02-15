/* *
 * ! we can select HTML element with their id, className, tagName, name in DOM
 * * when we select element with Id it return single dom element but when we select elements with className, tagName, Name they return a collection of dom elements
 * note: HTMLCollection & NodeList are Array like data structure but they are not Array
 */
console.dir(document.body)

// * select a dom element with id
const title = document.getElementById('title')
console.log(title)  // <h2 id="title" class="text-danger text-center">DOM: Document Object Model</h2>

// * select dom elements by class name
const paragraphs = document.getElementsByClassName('lead')
console.log(paragraphs) // HTMLCollection(2) [p.lead.my-4, p.lead]
console.log(Array.isArray(paragraphs)) // false

// * select dom elements by tag name
const lists = document.getElementsByTagName('li')
console.log(lists)  // HTMLCollection(3) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]

// * select dom elements by name
const listItemOne = document.getElementsByName('list-item-one')
console.log(listItemOne) // NodeList [li.list-group-item]
console.log(Array.isArray(listItemOne)) // false


/* =================== querySelector ================= */
/**
 * ! we can select dom element in CSS style with querySelector
 * * css style select means # for id, . for class, tagName for tag, [attribute^="value"] or [attribute="value"] for attribute select
 * note: if we use querySelector() for className, TagName, AttributeName it select first item only thats why we use querySelectorAll() for select all items and its return a collection of array like data structure but not array
 */

// * select element with Id
const title2 = document.querySelector('#title')
console.log(title2) // <h2 id="title" class="text-danger text-center">DOM: Document Object Model</h2>

// * select element with className
const paragraphs2 = document.querySelectorAll('.lead')
console.log(paragraphs2)  // NodeList(2) [p.lead.my-4, p.lead]

// * select element with TagName
const lists2 = document.querySelectorAll('li')
console.log(lists2) // NodeList(3) [li.list-group-item, li.list-group-item, li.list-group-item]

// * select element with Attribute
const listItemOne2 = document.querySelectorAll('[name="list-item-one"]')
console.log(listItemOne2)   // NodeList [li.list-group-item]


/* ========== getElementsBy..() vs querySelector()/querySelectorAll() =========== */
/**
 * ! getElementsBy..() return HTMLCollection but querySelector() returns NodeList bcz getElementBy..()'s constructor is HTMLCollection and querySelector()'s constructor is NodeList
 */
// * getElementBy..() is Element Node and it is specific
let li = document.getElementsByClassName('list-group-item')
console.log(li) 
//HTMLCollection(3) [li.list-group-item, li.list-group-item, li.list-group-item, list-item-one: li.list-group-item]
console.log(li.constructor.name)  // HTMLCollection

// * querySelector() is Node[element node/comment node/text node] and it isn't specific
let li2 = document.querySelectorAll('.list-group-item')
console.log(li2)
// NodeList(3) [li.list-group-item, li.list-group-item, li.list-group-item]
console.log(li2.constructor.name)   // NodeList

// ? Node contains every nodes but element nodes contains only html elements
let ul2 = document.querySelector('ul')
console.log(ul2.childNodes)