/**
 * ! Attributes
 * ? properties:
 * * we can print attr with attribute
 * * we can print attr with specificAttr
 * ? methods:
 * * we can print all attribute in a array with getAttributeNames()
 * * we can print specific attr node value with getAttributeNode('attr-name')
 * * we can print specific attr value with getAttribute('attr-name')
 * 
 * ! Create a Attribute
 * ? methods:
 * * we can create a attr with createAttribute('attr-name', 'attr-value':optional)
 * * we can also create a attribute with document.createAttribute('attr-name only')
 */
const list = document.getElementById('list4')
console.log(list.attributes) // NamedNodeMap {0: class, 1: id, class: class, id: id, length: 2}
console.log(list.getAttributeNames())   // (2) ["class", "id"]
console.log(list.getAttributeNode('class'))   // class="list-group my-5"
console.log(list.getAttribute('id')) // list4

// * className returns all classes as a string
console.log(list.className) // list-group my-5
// * classList returns all classes as a array
console.log(list.classList) // DOMTokenList(2) ["list-group", "my-5", value: "list-group my-5"]



// * create attr
// ! (1)
let lastChild = list.lastElementChild
lastChild.id = 'last-child'
// ! (2) (recommended)
lastChild.setAttribute('title', 'we r set a attr')
// ! (3) (when create attr without value)
let nameAttr = document.createAttribute('name')
nameAttr.value = 'I am last item of list4'  // value initialize
lastChild.setAttributeNode(nameAttr)

console.log(lastChild)