// ! generator is system to make a iterable collection from uniterable collection....we should add {*} sign to make a generator
// *simple generator..yield means pause
function* generate() {
    yield 1
    yield 2
    yield 3
}
let simpleGenerator = generate()
console.log(simpleGenerator.next()) // {value: 1, done: false}
console.log(simpleGenerator.next()) // {value: 2, done: false}
console.log(simpleGenerator.next()) // {value: 3, done: false}
console.log(simpleGenerator.next()) // {value: undefined, done: true}

console.log('\n')

const obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function* () {
        let currentValue = this.start
        let stopValue = this.end
        while (currentValue <= stopValue) {
            yield currentValue++
        }
    } 
}
let object_iterator = obj[Symbol.iterator]()
console.log(object_iterator.next()) // {value: 1, done: false}
console.log(object_iterator.next()) // {value: 2, done: false}
console.log(object_iterator.next()) // {value: 3, done: false}
console.log(object_iterator.next()) // {value: 4, done: false}
console.log(object_iterator.next()) // {value: 5, done: false}
console.log(object_iterator.next()) // {value: undefined, done: true}