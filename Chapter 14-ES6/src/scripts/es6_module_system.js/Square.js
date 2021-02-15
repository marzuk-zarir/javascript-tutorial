import Shape from './Shape'
class Square extends Shape{
    constructor(color, hand) {
        super(color)
        this.hand = hand
    }
    draw() {
        return 'Drawing a Square....'
    }
}
export default Square