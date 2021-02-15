let asyncIterable = {
    [Symbol.asyncIterator] () {
        let i = 0
        return {
            next() {
                if (i < 5) {
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                } else {
                    return Promise.resolve({
                        done: false
                    })
                }
            }
        }
    }
}
let asyncIterator = asyncIterable[Symbol.asyncIterator]();
(async function () {
    console.log(await asyncIterator.next())
    console.log(await asyncIterator.next())
    console.log(await asyncIterator.next())
    console.log(await asyncIterator.next())
    console.log(await asyncIterator.next())
    console.log(await asyncIterator.next())
})()