export class Application {
  private shapes: Shape[] = []
  constructor() {
    const circle = new Circle({ x: 0, y: 0, radius: 10, color: 'black' })
    const circleClone = circle.clone()

    this.shapes.push(circle)
    this.shapes.push(circleClone)

    const rectangle = new Rectangle({ x: 1, y: 0, width: 10, height: 10, color: 'green' })
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

  public x: ShapeType['x']
  public y: ShapeType['y']
  public color: ShapeType['color']

  constructor(source: ShapeType) {
    this.x = source.x
    this.y = source.y
    this.color = source.color
  }
  public abstract clone(): Shape

}

interface ShapeType {
  x: number,
  y: number,
  color: string,
}

class Rectangle extends Shape {
  public width: RectangleType['width']
  public height: RectangleType['height']

  constructor(source: RectangleType) {
    super(source)

    this.width = source.width
    this.height = source.height
  }

  public clone() {
    return new Rectangle(this)
  }
}

type RectangleType = ShapeType & { width: number, height: number }

class Circle extends Shape {
  public radius: CircleType['radius']

  constructor(source: CircleType) {
    super(source)

    this.radius = source.radius
  }

  public clone() {
    return new Circle(this)
  }
}

type CircleType = ShapeType & { radius: number }
