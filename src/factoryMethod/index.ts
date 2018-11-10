import config from './config'

export default class Application {
  private dialog: Dialog

  public main = () => {
    this.initialize()
    this.dialog.renderWindow()
  }

  private initialize = () => {
    switch (config.OS) {
    case 'Windows':
      this.dialog = new WindowsDialog()
      break
    case 'Mac':
      this.dialog = new MacDialog()
      break

    default:
      throw new Error('Unknown operationg system!')
    }
  }
}

// Dialogs
class Dialog {
  public createButton
  public renderWindow = () => {
    const button: Button = this.createButton()
    button.onClick = () => console.log('close dialog')
    button.render()
  }

}

class WindowsDialog extends Dialog {
  public createButton = () => new WindowsButton()
}

class MacDialog extends Dialog {
  public createButton = () => new MacButton()
}

// Buttons
interface Button {
  render: () => void
  onClick: (cb: () => any) => void
}

class WindowsButton implements Button {
  public render = () => console.log('rendering windows button')
  public onClick = (cb) => cb()
}
class MacButton implements Button {
  public render = () => console.log('rendering mac button')
  public onClick = (cb) => cb()
}
