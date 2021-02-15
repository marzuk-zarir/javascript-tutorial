// !Map is a Object like data structure which is added in es6. Map stores key-value pair and we can provide anything(bool, int) in key in map which is impossible in object. map is iterable....
// * we can create a map with Map([two_dimensional_array_only]) constructor
const arr = [
    ['a', 10],
    ['b', 20],
    ['c', 30]
]
let map1 = new Map(arr)
let map2 = new Map(arr)
console.log(map1)   // {"a" => 10, "b" => 20, "c" => 30}

// ? map method
// set a new data in map
map1.set('d', 40)
console.log(map1)   // {"a" => 10, "b" => 20, "c" => 30, "d" => 40}
map2.set({name: 'Marzuk'}, 10)
console.log(map2)   // Map(4) {"a" => 10, "b" => 20, "c" => 30, {name: 'Marzuk'} => 10}

// map size
console.log(map1.size)  // 4

// delete('key_only_in_string') in map
map1.delete('d')
console.log(map1)   // {"a" => 10, "b" => 20, "c" => 30}

// delete full map with clear()
map2.clear()
console.log(map2)   // Map(0) {}

// find specific value with key
// get('key_only_in_string')
console.log(map1.get('a'))  // 10

// keys, values, entries
console.log(map1.keys())    // MapIterator {"a", "b", "c"}
console.log(map1.values())  // MapIterator {10, 20, 30}
console.log(map1.entries()) // MapIterator {"a" => 10, "b" => 20, "c" => 30}

// iterate with for_of loop
for (let [k, v] of map1) {
    console.log(k)
    console.log(v)
}

// forEach(callback(value, key))
map1.forEach((v, k) => {
    console.log(k, v)
})

/* =============== WEAK MAP ================ */
// ! Weakmap is same as weakset and it prevents memory lick but we can use only object and set(),get(),delete(),has() methods and it isn't iterable by default
let a = {a: 10}
let b = {b: 20}
let weakMap = new WeakMap([[a, 10], [b, 20]])
a = null
console.log(weakMap.has(a)) // false