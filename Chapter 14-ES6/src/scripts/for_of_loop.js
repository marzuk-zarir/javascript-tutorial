const arr = [1, 2, 3]

// ?for of loop works in only iterable instance
// it returns direct value
for (let v of arr) {
    console.log(v)
}

console.log('\n')

const str = 'Marzuk'
for (let v of str) {
    console.log(v)
}

// error
// const obj = {
//     name: 'Zarir',
//     age: 15
// }
// for (let v of obj) {
//     console.log(v)
// }