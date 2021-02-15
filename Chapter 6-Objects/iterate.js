var obj = {
    x: 10,
    y: 20,
    z: 30
}
// in operator('property_name_in _string' in object_name)
console.log('x' in obj) // is x property declare in obj object?? true/false
console.log('p' in obj) // false

// OBJECT TRAVERSING
// forin loop
for (var i in obj) {
   console.log(i + ': ' + obj[i])
}