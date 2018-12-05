import { Parrot, WordyParrotDecorator } from './index'

const parrot = new Parrot('mark')
const wordyParrot = new WordyParrotDecorator(parrot)

console.log(wordyParrot.say('hello!'))
