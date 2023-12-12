function maxDistance(movements) {
  let right = 0
  let left = 0
  let asterisk = 0

  if (!movements.includes(">") || !movements.includes("<"))
  return movements.length
  
  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === ">") {
      right++
      continue
    }

    if (movements[i] === "<") {
      left++
      continue
    }

    asterisk++
  }

  if (right > left)
    return right + asterisk - left

    return left + asterisk - right
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5