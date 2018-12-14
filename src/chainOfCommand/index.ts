import { flow, head } from 'lodash'

interface ComponentWithContextualHelp {
  showHelp: () => string
}

abstract class Component implements ComponentWithContextualHelp {
  public tooltipText?: string

  public container: Container

  public showHelp() {
    if (this.tooltipText) {
      return this.tooltipText
    } else {
      return this.container.showHelp()
    }
  }
}

class Container extends Component {
  public children: Component[] = []

  public add(child: Component) {
    child.container = this
    this.children.push(child)

  }
}

class Button extends Component { }

class Panel extends Container {
  public modalHelpText: string

  public showHelp() {
    if (this.modalHelpText) {
      return this.modalHelpText
    } else {
      return this.container.showHelp()
    }
  }
}

class Dialog extends Container {
  public wikiPageText: string
  public showHelp() {
    if (this.wikiPageText) {
      return this.wikiPageText
    } else {
      return this.container.showHelp()
    }
  }
}

export class Application {
  public ui: Container

  constructor() {
    const dialog = new Dialog()
    dialog.wikiPageText = '=======wikipage text============='

    const panel = new Panel()
    panel.modalHelpText = '=========modal help text=========='

    const button = new Button()
    button.tooltipText = '=============button help text============='

    dialog.add(panel)
    panel.add(button)

    this.ui = dialog
  }

  public test() {
    const panel = this.ui.children[0]
    return panel.showHelp()
  }

}
