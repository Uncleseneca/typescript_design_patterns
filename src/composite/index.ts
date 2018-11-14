export class Application {
  public main() {
    const compound = new CompoundGraphic()
    compound.add(new Dot(0, 0))
    compound.add(new Circle(0, 0, 10))
    compound.move(15, 15)
    compound.draw()
  }
}

interface Graphic {
  id: number
  draw: () => void
  move: (x: number, y: number) => void
}

class Dot implements Graphic {
  public id: number
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.id = Math.random()
  }

  public draw() {
    console.log(`drawing a Dot at coords {${this.x}, ${this.y}}`)
  }

  public move(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Circle extends Dot {
  private radius: number

  constructor(x: number, y: number, radius: number) {
    super(x, y)

    this.radius = radius
  }

  public draw() {
    console.log(`drawing a Circle at coords {${this.x}, ${this.y}} with radius ${this.radius}`)
  }
}

class CompoundGraphic implements Graphic {
  public children: Graphic[] = []
  public id: number

  constructor() {
    this.id = Math.random()
  }

  public draw() {
    this.children.forEach((child) => child.draw())
  }

  public move(x: number, y: number) {
    this.children.forEach((child) => child.move(x, y))
  }

  public add(element: Graphic) {
    this.children.push(element)
  }

  public remove(element: Graphic) {
    this.children = this.children.filter((child) => child.id !== element.id)
  }

}
