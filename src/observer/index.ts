
enum Magazines { Times = 'Times', Sun = 'Sun' }

class MagazineStore {
  public eventManager = new EventManager()

  public issuesCount = {
    [Magazines.Times]: 0,
    [Magazines.Sun]: 0,
  }

  public issueMagazine(magazine: Magazines) {
    const count = this.issuesCount[magazine] + 1
    this.issuesCount[magazine] = count
    this.eventManager.notify(magazine, count)
  }

}

type MagazinesMap = {
  [key in keyof typeof Magazines]: EventListener[]
}

class EventManager {
  private listeners: MagazinesMap = {
    [Magazines.Times]: [],
    [Magazines.Sun]: [],
  }

  public subscribe(magazine: Magazines, listener: EventListener) {
    this.listeners[magazine].push(listener)
  }

  public ubsubscribe(magazine: Magazines, listener: EventListener) {
    this.listeners[magazine].filter((subscribedListener) => subscribedListener.id !== listener.id)
  }

  public notify(magazine: Magazines, data: any) {
    this.listeners[magazine].forEach((listener) => {
      listener.update(data)
    })
  }
}

abstract class EventListener {
  public id: number

  constructor(id: number) {
    this.id = id
  }
  public update(count: number) {
    console.log('update')
  }
}

class TimesListener extends EventListener {
  public update(count: number) {
    console.log(`Hey gentlemans! ${count} number of Times has arrived`)
  }
}

class SunListener extends EventListener {
  public update(count: number) {
    console.log(`Hey pieces of shit! ${count} number of Sun has arrived`)
  }
}

export class App {
  public main() {
    const store = new MagazineStore()

    const timesListener = new TimesListener(1)
    store.eventManager.subscribe(Magazines.Times, timesListener)

    const sunListener = new SunListener(2)
    store.eventManager.subscribe(Magazines.Sun, sunListener)

    store.issueMagazine(Magazines.Sun)
    store.issueMagazine(Magazines.Times)
    store.issueMagazine(Magazines.Times)
    store.issueMagazine(Magazines.Times)
  }
}
