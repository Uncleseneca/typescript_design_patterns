interface Strategy {
  execute: (a: number, b: number) => number
}

class ConcreteStrategyAdd implements Strategy {
  public execute(a: number, b: number) {
    return a + b
  }
}
class ConcreteStrategySubstract implements Strategy {
  public execute(a: number, b: number) {
    return a - b
  }
}
class ConcreteStrategyMultiply implements Strategy {
  public execute(a: number, b: number) {
    return a * b
  }
}
class ConcreteStrategyDivide implements Strategy {
  public execute(a: number, b: number) {
    return a / b
  }
}

class Context {
  private strategy: Strategy

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  public executeStrategy(a: number, b: number) {
    return this.strategy.execute(a, b)
  }
}

export class Application {
  public main() {
    const context = new Context()
    context.setStrategy(new ConcreteStrategyAdd())

    const addedNumbers = context.executeStrategy(5, 8)
    console.log(addedNumbers)

    context.setStrategy(new ConcreteStrategyMultiply())
    const multipliedNumbers = context.executeStrategy(5, 9)
    console.log(multipliedNumbers)

  }

}
