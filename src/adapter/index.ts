class RoundHole {
  private radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  public getRadius() {
    return this.radius
  }
  public fits(peg: RoundPeg) {
    return peg.getRadius() <= this.getRadius()
  }
}

class RoundPeg {
  private radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  public getRadius() {
    return this.radius
  }
}

class SquarePeg {
  private width: number

  constructor(width: number) {
    this.width = width
  }

  public getWidth() {
    return this.width
  }
}

class SquarePegAdaptor extends RoundPeg {
  private peg: SquarePeg

  constructor(peg: SquarePeg) {
    const holeRadius = peg.getWidth() * Math.sqrt(2) / 2 // calculate a hole which can fit a peg
    super(holeRadius)
    this.peg = peg
  }
}

export class Application {
  public main() {
    const roundHole = new RoundHole(10)
    const roundPeg = new RoundPeg(10)

    console.log(roundHole.fits(roundPeg))

    const smallSquarePeg = new SquarePeg(10)
    const bigSquarePeg = new SquarePeg(50)

    // console.log(roundHole.fits(smallSquarePeg))  throws an error because of incompatible types

    const adaptedSmallSquarePeg = new SquarePegAdaptor(smallSquarePeg)
    const adaptedBigSquarePeg = new SquarePegAdaptor(bigSquarePeg)

    console.log(roundHole.fits(adaptedSmallSquarePeg)) // fits
    console.log(roundHole.fits(adaptedBigSquarePeg)) // doesnt fit

  }

}
