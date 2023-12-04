function findNaughtyStep(original, modified) {
  if (original === modified)
    return ''

  let result
  let bigString = original
  let smallString = modified

  if (original.length < modified.length) {
    bigString = modified
    smallString = original
  }

  for (let i= 0; i < bigString.length; i++) {
    if (smallString[i] !== bigString[i]) {
      result = bigString[i]
      break
    }
  }

  return result
}