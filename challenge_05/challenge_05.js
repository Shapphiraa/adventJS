function cyberReindeer(road, time) {
  const result = [road]
  let indexOfSledge = road.indexOf("S")
  let previousCharacter = "."

  for (let i = 1; i < time; i++) {
    if (i === 5)
      road = road.replaceAll("|", "*")

    if (road[indexOfSledge+1] === "|") {
      result.push(road)
      continue
    }

    if (previousCharacter === "|") {
    previousCharacter = "*"
    }

    let firstPart = road.substring(0, indexOfSledge)
    let lastPart = road.substring(indexOfSledge+2)

    road = firstPart
    road += previousCharacter+"S"
    road += lastPart
    indexOfSledge = road.indexOf("S")
    
    previousCharacter = result[result.length-1][indexOfSledge]

    result.push(road)
  }

  return result
}

const road = 'S..|...|..'
const time = 10

console.log(cyberReindeer(road, time))