let obj = {
    start: 1,
    end: 10,
    [Symbol.iterator]: function () {
        let currentValue = this.start
        let self = this
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue++
                }
            }
        }
    }
}
for (let i of obj) {
    console.log(i)
}
