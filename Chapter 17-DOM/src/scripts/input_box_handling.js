/**
 * ! input box event handling
 */

// * when user enter his name in input box than press enter we should print his name in console
// ? keypress event works when we press a key...this object stores key method. in key method press's key is stored....when 'Enter' key pressed we understand that name writing is completed and then we print name in tag or console...after event complete we can empty value method for understand users to event end....

const fname = document.getElementById('name')
fname.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('selected-name').innerHTML = `Your Name is ${e.target.value}`
        e.target.value = ''
    }
})
