// !iterator is concept of iterate an object type data collection which can iterate an object in our demand mean when necessary

// *basic iterator
const arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// but for loop can't iterate on our demand


// ?create an iterator which can iterate on our demand
// on demand iterator
function createIterator(collection) {
    let i = 0
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}
let it1 = createIterator(arr)
console.log(it1.next()) // {done: false, value: 1}
console.log(it1.next()) // {done: false, value: 2}
console.log(it1.next()) // {done: false, value: 3}
console.log(it1.next()) // {done: true, value: undefined}

console.log('\n')

// !built-in iterator is added ES6
// ?collection_name[Symbol.iterator]()  function
// collection: object, array, string
// array iterate
let it2 = arr[Symbol.iterator]()
console.log(it2.next()) // {value: 1, done: false}
console.log(it2.next()) // {value: 2, done: false}
console.log(it2.next()) // {value: 3, done: false}
console.log(it2.next()) // {value: undefined, done: true}
// string iterate
let str = 'Marzuk'
let strIterate = str[Symbol.iterator]()
console.log(strIterate.next())  // {value: "M", done: false}
console.log(strIterate.next())  // {value: "a", done: false}
console.log(strIterate.next())  // {value: "r", done: false}
console.log(strIterate.next())  // {value: "z", done: false}
console.log(strIterate.next())  // {value: "u", done: false}
console.log(strIterate.next())  // {value: "k", done: false}
console.log(strIterate.next())  // {value: undefined, done: true}
