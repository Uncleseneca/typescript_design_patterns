import config from './config'

class Application {

  public createUI
  public render

  private button: Button
  private checkbox: Checkbox

  public constructor(factory: GUIFactory) {

    this.createUI = () => {
      this.button = factory.createButton()
      this.checkbox = factory.createCheckbox()
    }
    this.render = () => {
      this.button.render()
      this.checkbox.render()
    }
  }

  public run = () => {
    this.createUI()
    this.render()
  }
}

export class ApplicationConfigurator {
  public static configure = () => {
    let factory: GUIFactory
    switch (config.OS) {
    case 'Windows':
      factory = new WindowsFactory()
      break
    case 'Mac':
      factory = new MacFactory()
      break

    default:
      throw new Error('Unknown operationg system!')
    }

    return new Application(factory)
  }
}

// GUIFactories

interface GUIFactory {
  createButton: () => Button
  createCheckbox: () => Checkbox
}

class WindowsFactory implements GUIFactory {
  public createButton = () => new WindowsButton()
  public createCheckbox = () => new WindowsCheckbox()
}
class MacFactory implements GUIFactory {
  public createButton = () => new MacButton()
  public createCheckbox = () => new MacCheckbox()
}

// UI elements
interface Checkbox {
  render: () => void
}
interface Button {
  render: () => void
}

class MacCheckbox implements Checkbox {
  public render = () => console.log('rendering Mac checkbox')
}
class WindowsCheckbox implements Checkbox {
  public render = () => console.log('rendering Windows checkbox')
}

class MacButton implements Button {
  public render = () => console.log('rendering Mac button')
}
class WindowsButton implements Button {
  public render = () => console.log('rendering Windows button')
}
