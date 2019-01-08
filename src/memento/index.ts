class Editor {
  private text: string

  public setText(text: string) {
    this.text = text
  }

  public makeBackup() {
    return new Snapshot(this, this.text)
  }

  get textState() {
    return this.text
  }
}

class Snapshot {
  private editor: Editor
  private text: string

  constructor(editor: Editor, text: string) {
    this.editor = editor
    this.text = text
  }

  public restore() {
    this.editor.setText(this.text)
  }

}

abstract class Command {
  protected backup: Snapshot
  protected editor: Editor

  constructor(editor: Editor) {
    this.editor = editor
  }

  public execute(arg?: any) {
    console.log('execute')
  }

  public undo() {
    if (this.backup) {
      this.backup.restore()
    }
  }

  public makeBackup() {
    this.backup = this.editor.makeBackup()
  }
}

class SetTextCommand extends Command {
  public execute(text: string) {
    this.makeBackup()
    this.editor.setText(text)
  }
}

export class App {
  public main() {
    const editor = new Editor()
    const setTextCommand = new SetTextCommand(editor)

    setTextCommand.execute('some text')
    setTextCommand.execute('some other text')
    console.log(editor.textState)

    setTextCommand.undo()

    console.log(editor.textState)
  }
}
