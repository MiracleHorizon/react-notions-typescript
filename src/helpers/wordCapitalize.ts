const wordCapitalize = (word: string): string => {
  return word
    .split('')
    .map((char, i) => {
      return i === 0 ? char.toUpperCase() : char.toLowerCase()
    })
    .join('')
}

export default wordCapitalize
