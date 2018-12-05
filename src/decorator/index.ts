interface ParrotInterface {
  say: (word: string) => string
}

export class Parrot implements ParrotInterface {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  public say(word: string) {
    return `${word}! ${this.name} `
  }
}

class BaseDecorator implements ParrotInterface {
  public parrot: Parrot
  constructor(parrot: Parrot) {
    this.parrot = parrot
  }

  public say(word: string) {
    return this.parrot.say(word)
  }
}

export class WordyParrotDecorator extends BaseDecorator {
  public say(word: string) {
    return this.parrot.say(word).repeat(2)
  }
}
