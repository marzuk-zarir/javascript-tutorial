// ! Static method means create a object without create instance....means without using {new} keyword like
console.log(Math.random()) // ?in this line we don't create a instance

class Person {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    print() {
        return `His name is ${this.name} & email is ${this.email}`
    }
    static create(strJson) {    // obviously use {static} keyword
        let info = JSON.parse(strJson)  // json to object literal
        return new Person(info.name, info.email)
    }
}
// ?in this system we don't use new keyword for outside of class
let person = '{"name": "Marzuk", "email": "marzukzarir@gmail.com"}'
let p1 = Person.create(person)  
console.log(p1) // Person {name: "Marzuk", email: "marzukzarir@gmail.com"}
console.log(p1 instanceof Person)   // true
console.log(p1.print()) // His name is Marzuk & email is marzukzarir@gmail.com