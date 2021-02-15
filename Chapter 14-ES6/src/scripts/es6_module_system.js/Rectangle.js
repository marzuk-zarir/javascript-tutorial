import Shape from './Shape'
class Rectangle extends Shape{
    constructor(color, width, height) {
        super(color)
        this.width = width
        this.height = height
    }
}
export default Rectangle