interface Manager {
  send(msg: string): any
}

class Employee {
  private manager: Manager

  constructor(manager: Manager) {
    this.manager = manager
  }

  public send(msg: string) {
    return this.manager.send(msg)
  }
  public receive(msg: string) {
    console.log(msg)
  }
}

class JuniorEmployee extends Employee {
  public receive(msg: string) {
    return `receive ${msg} and panic!`
  }
}
class SeniorEmployee extends Employee {
  public receive(msg: string) {
    return `receive ${msg} and do my job!`
  }
}

export class ConcreteManager implements Manager {
  public juniorEmployee: JuniorEmployee
  public seniorEmployee: SeniorEmployee

  constructor() {
    this.juniorEmployee = new JuniorEmployee(this)
    this.seniorEmployee = new SeniorEmployee(this)
  }

  public send(msg: string) {
    if (msg === 'unimportant stuff') {
      return this.juniorEmployee.receive(msg)
    } else {
      return this.seniorEmployee.receive(msg)
    }
  }
}
