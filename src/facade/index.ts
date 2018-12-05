export class AnyFile {
  public name: string
  public content: string
  public ext: string
  constructor(name: string, content: string, ext: string) {
    this.name = name
    this.content = content
    this.ext = ext
  }
}

class OggCodec {
  public ext: string
  constructor() {
    this.ext = 'ogg'
  }
}

class Mp4Codec {
  public ext: string
  constructor() {
    this.ext = 'mp4'
  }
}

class ExtChanger {
  public static changeExt(file: AnyFile, codec) {

    const fileWithNewExt = new AnyFile(file.name, file.content, codec.ext)

    return fileWithNewExt
  }
}

class Amplifier {
  public static amplify(file: AnyFile) {
    const amplifiedFile = new AnyFile(file.name, file.content.toUpperCase(), file.ext)
    return amplifiedFile
  }
}

export class MusicMachine {
  public static convert(file: AnyFile, ext: string) {
    let fileWithNewExt: AnyFile

    switch (ext) {
    case 'mp4':
      fileWithNewExt = ExtChanger.changeExt(file, new Mp4Codec())

      break
    case 'ogg':
      fileWithNewExt = ExtChanger.changeExt(file, new OggCodec())
      break

    default:
      fileWithNewExt = file

    }
    const amplifiedFile = Amplifier.amplify(fileWithNewExt)
    return amplifiedFile
  }
}
