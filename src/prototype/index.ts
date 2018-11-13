export class Application {
  private shapes: Shape[] = []
  constructor() {
    const circle = new Circle()
    circle.x = 0
    circle.y = 0
    circle.color = 'black'
    circle.radius = 10
    const circleClone = circle.clone()

    this.shapes.push(circle)
    this.shapes.push(circleClone)

    const rectangle = new Rectangle()
    rectangle.x = 1
    rectangle.y = 1
    rectangle.width = 10
    rectangle.height = 10
    rectangle.color = 'green'

    const rectangleClone = rectangle.clone()

    this.shapes.push(rectangle)
    this.shapes.push(rectangleClone)

    console.log('shapes ', this.shapes)
  }

  public main() {
    const shapesCopy = this.shapes.map((shape) => shape.clone())
    console.log('shapesCopy', shapesCopy)
  }
}

abstract class Shape {

  public x: number
  public y: number
  public color: string

  constructor(source: Shape) {
    if (source) {
      this.x = source.x
      this.y = source.y
      this.color = source.color
    }
  }
  public abstract clone(): Shape

}

class Rectangle extends Shape {
  public width: number
  public height: number

  constructor(source?: Rectangle) {
    super(source)

    if (source) {
      this.width = source.width
      this.height = source.height
    }
  }

  public clone() {
    return new Rectangle(this)
  }
}

class Circle extends Shape {
  public radius: number

  constructor(source?: Circle) {
    super(source)

    if (source) {
      this.radius = source.radius
    }
  }

  public clone() {
    return new Circle(this)
  }
}
