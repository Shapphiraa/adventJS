function manufacture(gifts, materials) {
  const produced = []

  gifts.forEach(gift => {
    let isValid = gift.split("").every(letter => {
      return materials.includes(letter)
    })

    if (isValid)
      produced.push(gift)
  })

  return produced
}