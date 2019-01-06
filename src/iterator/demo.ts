import { Numbers } from './index'

const numbers = new Numbers([1, 54, 67, 6454, 3, 7])
const numbersIterator = numbers.createIterator()

console.log(numbersIterator.getNext())
console.log(numbersIterator.getNext())
console.log(numbersIterator.getNext())
console.log(numbersIterator.hasMore())
