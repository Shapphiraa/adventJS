function decode(message) {
  const regex = /\([^\(\)]+\)/g

  let resultRegex = message.match(regex)
  let parts = []

  while (resultRegex !== null) {

    resultRegex.forEach(string => {
      parts = message.split(string)

      string = string.replace(/\(|\)/g, '')
        .split('')
        .reverse()
        .join('')

      message = `${parts[0]}${string}${parts[1]}`
    })
    
    resultRegex = message.match(regex)
  }

  return message
}