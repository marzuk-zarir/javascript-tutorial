/**
 * ! Style
 * * style is object which contains all css properties.....but in js we should call css properties with camelCase naming convention
 * ? all css properties value should provided as string
 * 
 * ! but we can also create a object with css style and append it with Object.assign() method 
 */

let list = document.getElementById('list5')
let firstItem = list.firstElementChild

// * background
firstItem.style.background = 'cyan' // we can provide hex-code, color-name, rgb-value, hsl-value
firstItem.style.color = '#ffff00'

// * font
firstItem.style.fontSize = '18px'
firstItem.style.fontWeight = '800'

// * we can add many styles in object and add in style object
let styleObj = {
    background: '#ffccff',
    fontSize: '25px',
    color: '#333333'
}
let three = document.getElementById('three')
Object.assign(three.style, styleObj)