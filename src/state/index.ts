abstract class State {
  protected player: Player

  constructor(player: Player) {
    this.player = player
  }

  public abstract clickLock()
  public abstract clickPlay()
}

class LockedState extends State {
  public clickLock() {
    if (this.player.playing) {
      this.player.changeState(new PlayingState(this.player))
    } else {
      this.player.changeState(new ReadyToPlayState(this.player))
    }

    console.log('player unlocked')
  }

  public clickPlay() {
    console.log('do nothing')
  }
}

class ReadyToPlayState extends State {
  public clickLock() {
    this.player.changeState(new LockedState(this.player))
    console.log('player locked')
  }

  public clickPlay() {
    this.player.startPlayback()
    this.player.changeState(new PlayingState(this.player))
  }
}

class PlayingState extends State {
  public clickLock() {
    this.player.changeState(new LockedState(this.player))
    console.log('player locked')
  }

  public clickPlay() {
    this.player.stopPlayback()
    this.player.changeState(new ReadyToPlayState(this.player))
  }
}

export class Player {
  public playing = false
  private state: State
  constructor() {
    this.state = new LockedState(this)
  }

  public changeState(state: State) {
    this.state = state
  }

  public clickLock() {
    this.state.clickLock()
  }
  public clickPlay() {
    this.state.clickPlay()
  }

  public startPlayback() {
    this.playing = true
    console.log('playback started')
  }

  public stopPlayback() {
    this.playing = false
    console.log('playback stopped')
  }

}
