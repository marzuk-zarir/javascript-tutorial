import Shape from './Shape'
class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
}
export default Circle