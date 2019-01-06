interface IteratorIntarface {
  getNext(): any
  hasMore(): any
}

interface Collection {
  createIterator(): IteratorIntarface
}

class ConcreteIterator implements IteratorIntarface {
  private collection: number[] = []
  private position = 0

  constructor(collection: number[]) {
    this.collection = collection
  }

  public getNext() {
    const element = this.collection[this.position]
    this.position += 1
    return element
  }

  public hasMore() {
    return this.position < this.collection.length
  }
}

export class Numbers implements Collection {
  private collection: number[] = []
  constructor(collection: number[]) {
    this.collection = collection
  }

  public createIterator() {
    return new ConcreteIterator(this.collection)
  }
}
