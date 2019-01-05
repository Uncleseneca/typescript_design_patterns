interface Command {
  execute: () => void
}

class Receiver {
  public action() {
    return 'Action is being called!'
  }
}

class ConcreteCommand1 implements Command {
  private receiver: Receiver

  public constructor(receiver: Receiver) {
    this.receiver = receiver
  }

  public execute() {
    console.log('concrete command1 is being called!')
  }
}

class ConcreteCommand2 implements Command {
  private receiver: Receiver

  public constructor(receiver: Receiver) {
    this.receiver = receiver
  }

  public execute() {
    console.log('concrete command2 is being called!')
  }
}

class Invoker {
  private commands: Command[] = []

  public storeAndExecute(command: Command) {
    this.commands.push(command)
    command.execute()
  }
}

export class App {
  public main() {
    const receiver = new Receiver()
    const concreteCommand1 = new ConcreteCommand1(receiver)
    const concreteCommand2 = new ConcreteCommand2(receiver)
    const invoker = new Invoker()

    invoker.storeAndExecute(concreteCommand1)
    invoker.storeAndExecute(concreteCommand2)

  }
}
