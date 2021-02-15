let crtList = document.getElementById('list2')
let firstElement = crtList.firstElementChild

// update element
setTimeout(() => {
    firstElement.innerHTML = firstElement.innerHTML + ' (data modified)'
    firstElement.style.background = 'cyan'
}, 5000)

// remove element
setTimeout(() => {
    crtList.lastElementChild.remove()
}, 4000)