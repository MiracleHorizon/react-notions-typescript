const getAllCovers = (coversLists: any[]): any => {
  const coversArray: string[] = []
  coversLists.forEach(({ covers }) => coversArray.push(...covers))

  return coversArray
}

export { getAllCovers }
