// !Set is a array like data structure which is added in es6. array can store duplicate values but set can't store duplicate values. set is iterable....
let arr = [1, 2, 3, 4]
arr.push(3)
console.log(arr)   // [1, 2, 3, 4, 3]
console.log(arr.length) // 5

// * we can create a set with Set([store_only_array]) object
let set = new Set([1, 2, 3, 4])
set.add(3)
console.log(set)    // Set(4){1, 2, 3, 4}
console.log(set.size)   // 4

// ?Set methods
// clear() will remove all values of set
let set2 = new Set([1, 2])
set2.clear()
console.log(set2)   // Set(0) {}

// delete() will remove specific value of set
let set3 = new Set([1, 2, 3])
set3.delete(2)
console.log(set3)   // Set(2) {1, 3}

// has() check is provided value store in set...return boolean
let set4 = new Set([1, 2, 3, 4])
console.log(set4.has(2))

// keys()
let itSet = set4.keys()
console.log(itSet.next()) // {value: 1, done: false}
console.log(itSet.next()) // {value: 2, done: false}
console.log(itSet.next()) // {value: 3, done: false}
console.log(itSet.next()) // {value: 4, done: false}
console.log(itSet.next()) // {value: undefined, done: true}

// ?we can iterate set with for of loop
for (let i of set4) {
    console.log(i)
}

// entries()
console.log(set4.entries()) // SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4}

/* =============== WEAK SET ================ */
// ! when we remove or null or undefined a value of set but it can't delete permanently...
let a = {a: 10}
let b = {b: 20}
let c = {c: 30}
let set5 = new Set([a, b])
a = null
console.log(set5)
let arr = [...set5]
console.log(arr[0]) // {a: 10}

// ! Weakset prevent this memory lick but we can use only object and add(),delete(),has() methods and it isn't iterable by default
let weakSet = new WeakSet([b, c])
b = null
console.log(weakSet.has(b)) // false


