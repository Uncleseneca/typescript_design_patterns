export default class Application {
  public static makeCarAndManual() {
    const carBuilder = new CarBuilder()
    const carManualBuilder = new CarManualBuilder()

    Director.constructSportCar(carBuilder)
    Director.constructSportCar(carManualBuilder)

    const car = carBuilder.getResult()
    const carManual = carManualBuilder.getResult()

    return {
      car,
      carManual,
    }
  }
}

class Director {
  public static constructSportCar(builder: Builder) {
    builder.reset()
    builder.setWheels(4)
    builder.setEngine('damn powerfull')
    builder.setGPS('super precise')
  }
}

class CarBuilder implements Builder {
  private car: Car
  public reset() {
    this.car = {
      wheels: 0,
      engine: '',
      gps: '',
    }
  }
  public setEngine(engine: string) {
    this.car.engine = engine
  }
  public setWheels(wheels: number) {
    this.car.wheels = wheels
  }
  public setGPS(gps) {
    this.car.gps = gps
  }
  public getResult() {
    return this.car
  }
}

class CarManualBuilder implements Builder {
  private carManual: CarManual
  public reset() {
    this.carManual = {
      wheels: '',
      engine: '',
      gps: '',
    }
  }
  public setEngine(engine: string) {
    this.carManual.engine = `manual for engine. This car has ${engine} engine`
  }
  public setWheels(wheels: number) {
    this.carManual.wheels = `manual for wheels. This car has ${wheels} wheels`
  }
  public setGPS(gps) {
    this.carManual.gps = `manual for gps. This car has ${gps} gps`
  }
  public getResult() {
    return this.carManual
  }
}

interface Builder {
  reset: () => void
  setEngine: (engine: string) => void
  setWheels: (wheels: number) => void
  setGPS: (gps: string) => void
}

interface Car {
  wheels: number,
  engine: string,
  gps: string
}

interface CarManual {
  wheels: string,
  engine: string,
  gps: string

}
