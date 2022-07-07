import _ from 'lodash'

const getRandomCover = (coversLists: any[]): any => {
  const coversArray: string[] = []

  coversLists.forEach(({ covers }) => coversArray.push(...covers))

  return _.sample(coversArray)
}

export default getRandomCover
