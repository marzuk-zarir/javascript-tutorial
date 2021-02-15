/**
 * ! cloneNode duplicate a element node but it can't deeply clone...thats why it can't not clone innerHtml but it can clone all classes, id and attribute 
 */
let list = document.getElementById('list3')
let cloneNode = list.lastElementChild.cloneNode()
console.log(cloneNode)  // <li class="list-group-item"></li>

// * but we can clone a node with innerHtml with pass a parameter {true: default is false}
let cloneNode2 = list.lastElementChild.cloneNode(true)
console.log(cloneNode2)
list.appendChild(cloneNode2)