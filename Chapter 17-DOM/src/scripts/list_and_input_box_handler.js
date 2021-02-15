/**
 * ! when we double click in list item, list item covert into input box, than we update list item's data and press enter than list item shows changed data
 * ? to prevent event delegation we should add listener on {ul}...
 * 
 */
const list = document.getElementById('list8')
list.addEventListener('dblclick', function (ev) {
    if (this.contains(ev.target)) {
        let defaultText = ev.target.innerText
        ev.target.innerHTML = ''
        let inputBox = createInputBox(defaultText)
        ev.target.appendChild(inputBox)

        inputBox.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                ev.target.innerHTML = e.target.value
            }
        })
    }
})

/**
 * @function createInputBox creates a inputBox
 * @param {value} value input box's value attribute
 */
function createInputBox(value) {
    let inputBox = document.createElement('input')
    inputBox.type = 'text'
    inputBox.className = 'form-control'
    inputBox.value = value
    
    return inputBox
}