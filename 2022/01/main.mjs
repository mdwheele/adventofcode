import { count } from 'console'
import { readFileSync } from 'fs'

const input = readFileSync('input').toString()

const data = input
  // Split the dataset by empty lines.
  .split(/\n\n/)
  // Split the dataset into individual calorie strings.
  .map(dataset => dataset.split(/\n/))
  // Sum up calorie counts per elf.
  .map(calories => calories.reduce((acc, count) => acc += Number(count), 0))
  // Sort descending.
  .sort((a, b) => b - a)

// Top elf.
console.log('Part 1: ', data[0])

// Top three elves.
console.log('Part 2: ', data[0] + data[1] + data[2])
