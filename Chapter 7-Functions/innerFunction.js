function parent(name, greet) {
   // child function is a local scope of parent function & and it can use in only parent function
    function child() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    var result = greet + ', ' + child()
    console.log(result)
}

parent('Marzuk Zarir', 'Good Morning')