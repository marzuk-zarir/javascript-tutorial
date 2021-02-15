/**
 * ! DOM manipulation means create, delete, update....
 */
// * create dom element with createElement('tag_name', [options])
let li = document.createElement('li')

// ? set a class name if we works with multiple class we should use classList([classes in array])
li.className = 'list-group-item'
// li.classList.add('list-group-item', 'bg-danger')

// ?setAttribute('attr_name', 'attr_value')
li.setAttribute('title', 'hello world')

// ? innerHTML
li.innerHTML = 'Four'

// console.log(li) // <li class="list-group-item,border-danger" title="hello world">Four</li>

// then we can push li into 2nd ul tag
let crtList = document.getElementById('crtList')
crtList.appendChild(li) // which_parent.appendChild(child_node_name)

// ! we can create a function for create element to easy our work
function createElement(tag, innerHTML = '', classList = '') {
    let tagName = document.createElement(tag)
    tagName.classList.add(...classList)
    tagName.innerHTML = innerHTML
    return tagName
}
let fifthItem = createElement('li', 'Five', ['list-group-item', 'bg-primary'])
// console.log(fifthItem) // <li class="list-group-item bg-primary">Five</li>
crtList.appendChild(fifthItem)

// append before second list items
function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}

let div1 = createElement('div')
let p1 = createElement('p', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo modi sunt, porro qui officia reiciendis mollitia quam accusamus dignissimos!', ['lead'])
let p2 = createElement('p', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo modi sunt, porro qui officia reiciendis mollitia quam accusamus dignissimos!', ['lead'])
append(div1, [p1, p2])

// let container = document.getElementById('con')
// container.appendChild(div1)

// ==================== InsertAdjacentElement ========================
/**
 * ! If we want to set custom position for element we can use which_elements_relative.insertAdjacentElement('position', element_name)
 * ? there are 4 position in insertAdjacentElement:
 * ? 1. beforebegin
 * ? 2. afterbegin
 * ? 3. beforeend
 * ? 4. afterend
 * * it can't possible in appendChild() bcz it maintain the flow
 */
crtList.insertAdjacentElement('beforebegin', div1)
// ?beforebegin:
// <div></div>
// <ul>
//   <li></li>
//   <li></li>
//   <li></li>
//   <li></li>
// </ul>

// ?afterbegin:
// <ul>
//   <div></div>
//   <li></li>
//   <li></li>
//   <li></li>
//   <li></li>
// </ul>

// ?beforeend:
// <ul>
//   <li></li>
//   <li></li>
//   <li></li>
//   <li></li>
//   <div></div>
// </ul>

// ?afterend:
// <ul>
//   <li></li>
//   <li></li>
//   <li></li>
//   <li></li>
// </ul>
// <div></div>