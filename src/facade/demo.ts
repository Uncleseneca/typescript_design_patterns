import { AnyFile, MusicMachine } from './index'

const wavFile = new AnyFile('we-are-the-champions', 'my-friend', 'wav')
const mp4File = MusicMachine.convert(wavFile, 'mp4')

console.log(mp4File)
