// Property Descriptor
/* 
configurable --> can we remove property?      default is true
enumerable --> can we iterate this object's property?      default is true
writable --> can we overwrite property value?      default is true
*/
var obj3 = {
   name: 'Marzuk Zarir'
}

var ownPropertyDescriptor = Object.getOwnPropertyDescriptor(obj3, 'name')
console.log(ownPropertyDescriptor)

// set property descriptor for security
Object.defineProperty(obj3, 'name', {
   configurable: false,
   enumerable: false,
   writable: false
})
console.log(Object.getOwnPropertyDescriptor(obj3, 'name'))
