/**
 * ! form handling
 * * in form handling we should catch submit button by add listener in form...but remember always submit button implement in inner form tag in HTML.....this is systematic way....
 */

// ? when we submit a form, our browser refresh him.....but this very bad for user experience...so we can prevent browser refresh behaviour by call e.preventDefault() method

// * in a form we can select input elements by object's property selecting way like array notation obj[ind] or selecting this['name_property's_value:string'] or covert form to in array and traverse quickly

// ? we can create a object and every data push in object as e.name is property & e.value is property's value... than we can submit this object in data base or remote server

const form = document.getElementById('form')
let isValid = false
form.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(this.length)  // 5 --> this.length return input element count
    // console.log(this[0])
    // console.log(this['form-name'])
    // <input type="text" id="form-name" class="form-control" placeholder="Enter Your Full Name" />
    let formObject = {};
    [...this.elements].forEach(el => {
        if (el.type !== 'submit') {
            isValid = validator(el)
            // emailValidator(el)
            if (isValid){
                formObject[el.name] = el.value
            } else {
                el.classList.add('is-invalid')
            }
        }
    })
    if (isValid) {
        console.log(formObject)
        this.reset() // it is reset the form
    }
})

function validator(element) {
    if (!element.value) {
        return false
    } else {
        element.value.trim()
        return true
    }
}

function emailValidator(element) {
    if (element.type === 'email') {
        if (element.value.endsWith('@gmail.com')
        || element.value.endsWith('@yahoo.com')
        || element.value.endsWith('@mail.com')) {
            return true
        } else {
            return false
        }
    }
}