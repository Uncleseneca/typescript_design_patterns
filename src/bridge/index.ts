export class Application {
  public main() {
    const tv = new Tv()
    const tvRemote = new Remote(tv)

    tvRemote.togglePower()
    tvRemote.setChannel(5)
    tvRemote.increaseVolume()

    console.log(tv)
  }
}

class Remote {
  private device: Device

  constructor(device: Device) {
    this.device = device
  }

  public togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable()
    } else {
      this.device.enable()
    }
  }

  public increaseVolume() {
    const volume = this.device.getVolume()
    this.device.setVolume(volume + 1)
  }
  public decreaseVolume() {
    const volume = this.device.getVolume()
    this.device.setVolume(volume - 1)
  }

  public increaseChannel() {
    const channel = this.device.getChannel()
    this.device.setChannel(channel + 1)
  }
  public decreaseChannel() {
    const channel = this.device.getChannel()
    this.device.setChannel(channel - 1)
  }

  public setChannel(channel: number) {
    this.device.setChannel(channel)
  }
}

interface Device {
  isEnabled: () => boolean
  enable: () => void
  disable: () => void

  getVolume: () => number
  setVolume: (volume: number) => void

  getChannel: () => number
  setChannel: (volume: number) => void
}

class Tv implements Device {
  private enabled: boolean
  private channel: number
  private volume: number

  public constructor() {
    this.enabled = false
    this.channel = 0
    this.volume = 0
  }

  public isEnabled() { return this.enabled }
  public enable() { this.enabled = true }
  public disable() { this.enabled = false }

  public getVolume() { return this.volume }
  public setVolume(volume: number) { this.volume = volume }

  public getChannel() { return this.channel }
  public setChannel(channel: number) { this.channel = channel }
}
