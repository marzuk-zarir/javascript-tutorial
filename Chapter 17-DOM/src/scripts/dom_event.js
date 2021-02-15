/**
 * ! Javascript Event
 * * click, scrolling, refresh etc. everything are events
 * * in every node every event function declare with {on} word like onclick, onblur, oncancel, oncopy etc.
 * ? Uses:
 * * all events are function which contains a event parameter
 * * we can call event function in inline-html, element.eventMethod or use a addEventListener('eventName', callback_func)
 * ? <button onclick="handlerFunc()">Add me</button>  --> inline-html(not recommended)
 * ? addMe.onclick = function(e) {} --> eventMethod
 * ? addMe.addEventListener('click', function(e) {}) --> addEventListener way(on word not use)
 * note: In event handler, always try to use normal function expression bcz arrow function can't remember {this} as a element 
 */
const addMe = document.getElementById('add-me')
// addMe.onclick = function(e) {
//     console.log(e)  // MouseEvent {…}
//     console.log(this)
// }
// addMe.addEventListener('click', function (e) {
//     console.log('I have Clicked')
// })

// print canvas X-axis & Y-axis position
const canvas = document.getElementById('canvas')
canvas.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
})

// add items in 7th list
const list = document.getElementById('list7')
let copyNumber = 1
addMe.addEventListener('click', function (e) {
    let lastItem = list.lastElementChild
    let newItem = lastItem.cloneNode(true)
    newItem.innerHTML = `new Item${copyNumber === 1 ? '' : `(${copyNumber - 1})`}`
    ++copyNumber
    list.appendChild(newItem)
});

// ======================== Event Delegation ================================
/**
 * ! e.target select element which is added this event
 */

// * this event perfectly works in html default element but when we created some element under list this event can not work this is called event delegation problem
// [...list.children].forEach(li => {
//     li.addEventListener('click', function (e) {
//         // console.log(e.target)
//         e.target.remove()
//     })
// })
// ? to solve event delegation problem we should add event in their parents when we add listener in their parents automatically childs access to the eventListener
// * .contains():bool method check event add in childs
// * e.target are childs
list.addEventListener('click', function (e) {
    if (this.contains(e.target)) {
        e.target.remove()
    }
})