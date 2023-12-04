function findFirstRepeated(gifts) {
  const numbers = []
  
  for (let i = 0; i < gifts.length; i++) {
    if (numbers.includes(gifts[i]))
    return gifts[i]
  
    numbers.push(gifts[i])
  }
    return -1
  }