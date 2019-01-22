interface InsuranceAgent {
  visitFlat: (flat: Flat) => void
  visitHouse: (house: House) => void
  visitFactory: (mention: Factory) => void
}

class ConcreteAgent implements InsuranceAgent {
  public visitFlat(flat: Flat) {
    console.log(`insurance policy for ${flat.area} m2 of area of flat`)
  }
  public visitHouse(house: House) {
    console.log(`insurance policy for ${house.area} m2 of
    area and ${house.courtYardArea} m2 of courtyard area of house`)
  }
  public visitFactory(factory: Factory) {
    console.log(`insurance policy for ${factory.area} m2 of
    area and ${factory.machinesCount} pc. of machines in factory`)
  }
}

abstract class RealEstate {
  public area: number

  public insure: (agent: InsuranceAgent) => void

  constructor(area: number) {
    this.area = area
  }
}

class Flat extends RealEstate {
  public insure = (agent: InsuranceAgent) => {
    agent.visitFlat(this)
  }
}

class House extends RealEstate {
  public courtYardArea: number

  constructor(area: number, courtYardArea: number) {
    super(area)
    this.courtYardArea = courtYardArea
  }
  public insure = (agent: InsuranceAgent) => {
    agent.visitHouse(this)
  }
}

class Factory extends RealEstate {

  public machinesCount: number

  constructor(area: number, machinesCount: number) {
    super(area)
    this.machinesCount = machinesCount
  }

  public insure = (agent: InsuranceAgent) => {
    agent.visitFactory(this)
  }
}

export class Application {
  public main() {
    const estate = [new Flat(50), new House(70, 100), new Factory(5000, 200)]
    const insuranceAgent = new ConcreteAgent()
    estate.forEach((item) => item.insure(insuranceAgent))
  }
}
