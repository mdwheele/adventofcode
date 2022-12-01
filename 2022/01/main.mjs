import { count } from 'console'
import { readFileSync } from 'fs'

const input = readFileSync('input').toString()

const data = input
  .split(/\n\n/)
  .map(dataset => dataset.split(/\n/))
  .map(calories => calories.reduce((acc, count) => acc += Number(count), 0))
  .sort((a, b) => b - a)


console.log('Part 1: ', data[0])
console.log('Part 2: ', data[0] + data[1] + data[2])
