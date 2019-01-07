import { ConcreteManager } from './index'

const concreteManager = new ConcreteManager()
console.log(concreteManager.seniorEmployee.send('unimportant stuff'))
console.log(concreteManager.juniorEmployee.send('some info'))
