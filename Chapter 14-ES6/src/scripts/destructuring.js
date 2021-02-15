// ! destructuring means iterate index with variable
// *manual destructuring(useless)
let obj = {
    fname: 'Marzuk',
    email: 'marzukzarir@gmail.com',
}
let fname = obj.fname
let email = obj.email
console.log(fname, email) // Marzuk marzukzarir@gmail.com



// *smart destructuring
let obj2 = {
    fname2: 'Marzuk',
    email2: 'business.marzukzarir@gmail.com',
}
let { fname2, email2 } = obj2
console.log(fname2, email2) // Marzuk business.marzukzarir@gmail.com
// !multilevel object destructuring
let obj3 = {
    fname3: 'Zarir',
    email3: 'marzukafar@gmail.com',
    age: {
        myAge: 15,
    }
}
let { fname3, email3, age: { myAge } } = obj3
console.log(fname3, email3, myAge) // Zarir marzukafar@gmail.com 15




// ? array destructuring
let arr = [3, 3, 4, 2, 7, 4, 9, 2, 1, 7]
let [first_ele, , third_ele, , , , , , , last_ele] = arr
console.log(first_ele, third_ele, last_ele) // 3 4 7
